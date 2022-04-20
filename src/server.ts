import express from 'express';
import { Router } from 'express';

import Routes from './routes';

const app = express();

const route = Router()

app.use(express.json())

route.use('/', Routes);

app.use(route)


app.listen(3333, () => 'server running on port 3333')

