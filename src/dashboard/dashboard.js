import { Card, CardContent, Typography } from '@mui/material';
import { useGetList } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';


const Dashboard = () => {
    const { data: users } = useGetList('users');
    const { data: posts } = useGetList('posts');

    if (!users || !posts) return <p>Chargement...</p>;

    const postsPerUser = users.map(user => ({
        name: user.name,
        posts: posts.filter(post => post.userId === user.id).length,
    }));

    const publishedCount = posts.filter(post => post.status === 'Published').length;
    const draftCount = posts.filter(post => post.status === 'Draft').length;
    const statusData = [
        { name: 'Published', value: publishedCount },
        { name: 'Draft', value: draftCount },
    ];
    const COLORS = ['#4CAF50', '#9E9E9E'];

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
            <Card sx={{ width: 300, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5">Utilisateurs</Typography>
                    <Typography variant="h3">{users.length}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 300, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5">Posts</Typography>
                    <Typography variant="h3">{posts.length}</Typography>
                </CardContent>
            </Card>

            {/* Graphique en barres */}
            <BarChart width={500} height={300} data={postsPerUser}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="posts" fill="#8884d8" />
            </BarChart>

            {/* ✅ Correction du graphique en camembert */}
            <PieChart width={400} height={400}>
                <Pie 
                    data={statusData} 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    fill="#8884d8" 
                    dataKey="value"
                    label
                >
                    {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Dashboard;
