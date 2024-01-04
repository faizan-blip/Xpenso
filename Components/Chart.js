import { Button, ButtonGroup, Skeleton, Stack } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const router = useRouter();
  const session = () => {
    if (typeof sessionStorage !== 'undefined') {
      const token = sessionStorage.getItem("token");
      return {token:token}
    } else {
      // Handle the case where sessionStorage is not available
      return { token: null };
    }
  };

    const {token} = session()
    const tokencr = Cookies.get("token")
  const [chartData, setChartData] = useState([]);
  const [view, setView] = useState('monthly');
  const [expenseData, setExpenseData] = useState([]);
  const [budgetData, setBudgetData] = useState([]);

  const fetchData = async () => {
    try {
      const budgetResponse = await axios.get('https://xpenso-backend.onrender.com/api/getBudget', {
        headers: {
          Authorization: `Bearer ${token || tokencr}`,
        },
      });

      const expenseResponse = await axios.get('https://xpenso-backend.onrender.com/api/getExpense', {
        headers: {
          Authorization: `Bearer ${token || tokencr}`,
        },
      });

      setBudgetData(budgetResponse.data.data);
      setExpenseData(expenseResponse.data.data);
   

      const organizedData = view === 'monthly' ? organizeDataByMonth(expenseResponse.data.data) : organizeDataByDay(expenseResponse.data.data);
      setChartData(organizedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const organizeDataByMonth = (expenseData) => {
    const monthlyData = {};

    expenseData.forEach((entry) => {
      const monthYear = new Date(entry.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' });

      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = {
          totalExpense: 0,
          totalBudget: 0,
        };
      }

      monthlyData[monthYear].totalExpense += entry.value;
    });

    // Combine expense and budget data for the specified month/year
    const result = Object.keys(monthlyData).map((key) => {
      const budgetEntry = budgetData.find((entry) => new Date(entry.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' }) === key);

      return {
        monthYear: key,
        totalExpense: monthlyData[key].totalExpense,
        totalBudget: budgetEntry ? budgetEntry.value : budgetEntry.value ,
      };
    });

    return result;
  };

  const organizeDataByDay = (expenseData) => {
    const dailyData = {};

    expenseData.forEach((entry) => {
      const day = new Date(entry.createdAt).toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' });

      if (!dailyData[day]) {
        dailyData[day] = {
          totalExpense: 0,
          totalBudget: 0,
        };
      }

      dailyData[day].totalExpense += entry.value;
    });

    // Combine expense and budget data for the specified day
    const result = Object.keys(dailyData).map((key) => {
      const budgetEntry = budgetData.find((entry) => new Date(entry.createdAt).toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' }) === key);

      return {
        day: key,
        totalExpense: dailyData[key].totalExpense,
        totalBudget: budgetEntry ? budgetEntry.value : 0,
      };
    });

    return result;
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <Stack height='20em' width={{lg:"40%"  , sm:"100%" , xs:"300px"}}  padding='1em 1em' flexDirection='column' gap='1.2em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' borderRadius='10px'>
        <ButtonGroup sx={{ flexDirection: "row", alignSelf: "end" }}>
          <Button
            variant={view === 'monthly' ? 'contained' : 'contained'}
            onClick={() => handleViewChange('monthly')}
            sx={{ background: view === 'monthly' ? 'none !important' : 'none !important',boxShadow: view === 'monthly' ? '2px 2px 5px #babecc,-5px -5px 10px #ffffff73 !important' : 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73 !important', color: view === 'monthly' ? '#252525' : '#f5f5f5' ,borderRadius:"10px"}}
          >
            Monthly
          </Button>
          <Button
            variant={view === 'daily' ? 'contained' : 'contained'}
            onClick={() => handleViewChange('daily')}
            sx={{ background: view === 'daily' ? 'none !important' : 'none !important',boxShadow: view === 'daily' ? '2px 2px 5px #babecc,-5px -5px 10px #ffffff73 !important' : 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73 !important', color: view === 'daily' ? '#252525' : '#f5f5f5' ,borderRadius:"10px"}}
          >
            Daily
          </Button>
        </ButtonGroup>
        {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={view === 'monthly' ? 'monthYear' : 'day'} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalExpense" fill="#ff4444" name="Expense" />
            <Bar dataKey="totalBudget" fill="#4caf50" name="Budget" />
          </BarChart>
        </ResponsiveContainer>
        ) : (
          <Skeleton height='40em' />
        )
}
      </Stack>
    </>
  );
};

export default Chart;
