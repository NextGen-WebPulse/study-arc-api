import express, { Application } from 'express'
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

// Init Express
const app: Application = express();

// Application Route
app.use('/api/v1', router);

// Error handler
app.use(globalErrorHandler);
app.use(notFound);
// Export App
export default app