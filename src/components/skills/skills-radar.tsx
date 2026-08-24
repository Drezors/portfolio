'use client';

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function CompetenceRadar({ data }: any) {
  const chartData = data.map((competence: any) => ({
    subject: competence.title,
    level: competence.level,
  }));

  return (
    <div className='w-full h-[400px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart data={chartData}>
          <PolarGrid />

          <PolarAngleAxis dataKey='subject' tick={{ fontSize: 12 }} />

          <PolarRadiusAxis domain={[0, 5]} tickCount={6} />

          <Radar name='Niveau de maîtrise' dataKey='level' stroke='#6366f1' fill='#6366f1' fillOpacity={0.4} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
