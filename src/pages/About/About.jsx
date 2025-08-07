import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

// Sample data
const data = [
  { name: 'The Great Gatsby', pages: 192, color: '#3b82f6' },
  { name: 'To kill a mocking bird', pages: 281, color: '#14b8a6' },
  { name: '1984', pages: 328, color: '#facc15' },
  { name: 'The Alchemist', pages: 177, color: '#fb923c' },
  { name: 'Pride and prejudice', pages: 279, color: '#ef4444' },
];

const About = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-base-200 flex flex-col items-center justify-center gap-12">
      {/* About Me Card */}
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl p-6 animate-fade-up">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
          <p className="text-lg text-gray-600 mb-2">
            👋 Hi! I'm{' '}
            <span className="font-semibold text-secondary">Mehedi Hasan</span>.
            I built this project as part of my journey to become a skilled web
            developer.
          </p>
          <p className="text-md text-gray-500 mb-2">
            This app is made using <strong>React</strong>,{' '}
            <strong>TailwindCSS</strong>, <strong>DaisyUI</strong>, and deployed
            with <strong>Surge</strong>. I'm currently learning advanced web
            technologies and love building beautiful UIs.
          </p>
          <p className="text-md text-gray-500">
            Thanks for checking it out! 🙌
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full max-w-4xl bg-base-100 p-6 rounded-box shadow-xl animate-fade-up">
        <h2 className="text-2xl font-semibold text-center text-secondary mb-6">
          Some Books I Like
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            {data.map((entry, index) => (
              <Area
                key={index}
                type="monotone"
                dataKey="pages"
                data={[entry]}
                stroke={entry.color}
                fill={entry.color}
                strokeWidth={0}
                dot={false}
              >
                <LabelList
                  dataKey="pages"
                  position="top"
                  fill={entry.color}
                  fontSize={14}
                />
              </Area>
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default About;
