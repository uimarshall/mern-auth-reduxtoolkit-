import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse the url encoded data and also enable us to send form data

// Route middleware

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

// error middleware
app.use(notFound);
app.use(errorHandler);

export default app;
