import { PieChart, Pie, Cell } from 'recharts';
import { COLORS } from '../utils';

const Diagram = ({ data }) => {
    const dummyData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
    return (
        <PieChart width={200} height={200}>
            <Pie
            data={dummyData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            >
                {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}

export default Diagram