import express, { Application } from 'express'
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import cookireParser from 'cookie-parser';
import cors from 'cors';
// Init Express
const app: Application = express();
app.use(express.json());
app.use(cookireParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
// Application Route
app.use('/api/v1', router);

// Error handler
app.use(globalErrorHandler);
app.use(notFound);
// Export App
export default app