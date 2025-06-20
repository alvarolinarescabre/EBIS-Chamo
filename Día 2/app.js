require('dotenv').config();
const express = require('express');
const { createClient } = require('redis');
const app = express();
const redisClient = createClient({
    socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
}
});

redisClient.connect().catch(console.error);
app.get('/', async (req, res) => {
    const visits = await redisClient.incr('visits');
    res.json({ visits });
});

app.get('/visits', async (req, res) => {
    const count = await redisClient.get('visits');
    res.json({ total_visits: parseInt(count) || 0 });
});

const port = 3000;
    app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
