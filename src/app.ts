import express, { Application } from 'express'
import router from './app/routes';

// Init Express
const app:Application = express()

// Application Route
app.use('/api/v1', router)

// Export App
export default app