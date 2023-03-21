import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { registerRoutes } from './routes';

dotenv.config();

const port = process.env.PORT;

const app: Express = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'API waiting for requests...' });
});

registerRoutes(app);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

export default app;
