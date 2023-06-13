import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;
