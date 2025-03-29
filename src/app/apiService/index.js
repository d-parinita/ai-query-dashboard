import { v4 as uuidv4 } from 'uuid';

export const signIn = () => {
    return uuidv4()
} 


export const generateMockData = (query) => {
    const now = new Date();
    const labels = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(now);
      date.setMonth(date.getMonth() - i);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }).reverse();
  
    const generateRandomData = () => {
      return Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));
    };
  
    const mockData = {
      revenue: {
        chartData: {
          labels,
          datasets: [{
            label: 'Revenue',
            data: generateRandomData(),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        tableData: [
          { month: 'Jan 2024', revenue: 15000, growth: '+12%' },
          { month: 'Feb 2024', revenue: 16500, growth: '+10%' },
          { month: 'Mar 2024', revenue: 18000, growth: '+9%' },
        ]
      },
      users: {
        chartData: {
          labels,
          datasets: [{
            label: 'Active Users',
            data: generateRandomData(),
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }]
        },
        tableData: [
          { month: 'Jan 2024', users: 5000, growth: '+15%' },
          { month: 'Feb 2024', users: 5750, growth: '+13%' },
          { month: 'Mar 2024', users: 6500, growth: '+11%' },
        ]
      },
      sales: {
        chartData: {
          labels,
          datasets: [{
            label: 'Sales',
            data: generateRandomData(),
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
          }]
        },
        tableData: [
          { month: 'Jan 2024', sales: 250, growth: '+8%' },
          { month: 'Feb 2024', sales: 270, growth: '+7%' },
          { month: 'Mar 2024', sales: 290, growth: '+6%' },
        ]
      }
    };
  
    const queryKey = Object.keys(mockData).find(key => 
      query.toLowerCase().includes(key)
    ) || 'revenue';
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[queryKey]);
      }, 1000);
    });
  };
  