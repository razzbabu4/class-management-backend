import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { UserRoute } from './app/modules/User/user.routes';
import { AuthRoute } from './app/modules/Auth/auth.routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', UserRoute)
app.use('/api/auth', AuthRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Users')
})

export default app;