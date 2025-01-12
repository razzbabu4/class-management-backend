import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { UserRoute } from './app/modules/User/user.routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', UserRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Users')
})

export default app;