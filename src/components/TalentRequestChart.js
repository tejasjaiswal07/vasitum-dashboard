import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 5 },
  { name: 'Feb', value: 8 },
  { name: 'Mar', value: 12 },
  { name: 'Apr', value: 10 },
  { name: 'May', value: 15 },
  { name: 'Jun', value: 16 },
];

function TalentRequestChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#DB54FD" fill="#DB54FD" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default TalentRequestChart;