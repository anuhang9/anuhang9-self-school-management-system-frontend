import type { ApexOptions } from 'apexcharts';
import {motion} from 'framer-motion'
import Chart from 'react-apexcharts'

export const StudentDetails = () => {
    // Chart options and series data from ApexCharts basic column chart demo
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar', // Column chart is a 'bar' type in ApexCharts
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4, // Set radius for rounded ends
        borderRadiusApplication: 'end', // Apply radius to the top of bars
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val} thousands`,
      },
    },
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    colors: ['#008FFB', '#00E396', '#FEB019'], // Distinctive colors
  };
  return (
    <motion.div initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}} className='w-full'>
      <h2>Basic Column Chart</h2>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </motion.div>
  );
};



