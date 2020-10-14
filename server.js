import express from 'express';
import connectDB from './config/db';

const app = express();

connectDB();

app.get('/', (req, res) => res.send('http get request successfully sent to root api endpoint'));

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});

app.listen(3000, () => console.log('express server running on port 3000'))