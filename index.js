import express from 'express';
import dotenv from 'dotenv';
import router from './router.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Works!');
});

app.get('/test', (req, res) => {
    res.send('Test Works!');
})

app.use('/router', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});