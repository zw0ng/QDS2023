import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Averageschart = () => {

    const data = [
        {name: "Avg. Payload", value: 3000},
        {name: "Avg. Milage", value: 8945},
        {name: "Avg. Fuel Consumption", value: 3521}
    ]

    return (
        <div className="App">
        <h1 className='text-2xl text-center'>Vehicle Averages</h1>
        <h2 className='text-center'>Km, Kg, L</h2>
        <PieChart width={400} height={400} className="-m-10">
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
      );
}
 
export default Averageschart;