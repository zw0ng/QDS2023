import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Truck A',
    fuel: 4000,
    miles: 2400,
    amt: 2400,
  },
  {
    name: 'Truck B',
    fuel: 3000,
    miles: 1398,
    amt: 2210,
  },
  {
    name: 'Truck C',
    fuel: 2000,
    miles: 9800,
    amt: 2290,
  },
  {
    name: 'Truck D',
    fuel: 2780,
    miles: 3908,
    amt: 2000,
  },
  {
    name: 'Truck E',
    fuel: 1890,
    miles: 4800,
    amt: 2181,
  },
  {
    name: 'Truck F',
    fuel: 2390,
    miles: 3800,
    amt: 2500,
  },
  {
    name: 'Truck G',
    fuel: 3490,
    miles: 4300,
    amt: 2100,
  },
];

const Fuelchart = () => {
  return (
    <div>
      <h1 className='text-2xl text-center'>Fuel vs. Milage</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="miles" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="fuel" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default Fuelchart;