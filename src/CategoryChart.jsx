import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FFBB28'];

function CategoryChart({ transactions }) {
  const totals = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});
  const data = Object.entries(totals).map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return <p>No expenses to chart yet.</p>;
  }

  return (
    <div className="category-chart" style={{ width: '100%', height: 300 }}>
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2A3630" />
          <XAxis dataKey="name" tick={{ fill: '#8A978E' }} stroke="#2A3630" />
          <YAxis tick={{ fill: '#8A978E' }} stroke="#2A3630" />
          <Tooltip
            formatter={(value) => `$${value}`}
            contentStyle={{ background: '#1D2822', border: '1px solid #2A3630', borderRadius: 8, color: '#E8EDE9' }}
            labelStyle={{ color: '#E8EDE9' }}
          />
          <Bar dataKey="value" name="Spent">
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;
