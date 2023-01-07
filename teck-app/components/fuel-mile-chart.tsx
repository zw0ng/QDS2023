import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    fuel: 4000,
    miles: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    fuel: 3000,
    miles: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    fuel: 2700,
    miles: 4800,
    amt: 2290,
  },
  {
    name: 'April',
    fuel: 2780,
    miles: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    fuel: 1890,
    miles: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    fuel: 2390,
    miles: 3800,
    amt: 2500,
  },
];

const Fuelchart = () => {
    return ( 
                <div>
        <h1 className='text-xl text-center'>6 month fuel/mileage trend</h1>
        <h2 className='text-center'>Litres & Miles</h2>
        <LineChart
          width={750}
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