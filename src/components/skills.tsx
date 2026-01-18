'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { skillsData } from '@/app/data';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { useTheme } from './theme-provider';

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
  },
  react: {
    label: 'React',
    color: 'hsl(196.4 78.3% 52.5%)',
  },
  nodejs: {
    label: 'Node.js',
    color: 'hsl(120 39.4% 49.2%)',
  },
  typescript: {
    label: 'TypeScript',
    color: 'hsl(210.9 82.3% 60.2%)',
  },
  nextjs: {
    label: 'Next.js',
    color: 'hsl(0 0% 9.0%)',
  },
  graphql: {
    label: 'GraphQL',
    color: 'hsl(319.9 83.3% 51.6%)',
  },
  tailwind: {
    label: 'Tailwind CSS',
    color: 'hsl(194.5 90.5% 50.4%)',
  },
} satisfies ChartConfig;

export default function Skills() {
  const { effectiveTheme } = useTheme();

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            My Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A visualization of my proficiency in various technologies.
          </p>
        </div>
        <div className="mt-12">
          <ChartContainer config={chartConfig} className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillsData}
                layout="vertical"
                margin={{ left: 10, right: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                  width={100}
                />
                <XAxis dataKey="proficiency" type="number" hide />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="proficiency" radius={5} barSize={24}>
                  {skillsData.map((entry) => (
                    <Bar
                      key={entry.name}
                      dataKey="proficiency"
                      fill={entry.fill}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
}
