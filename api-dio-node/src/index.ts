import express, { Request, Response } from 'express';
import {router} from './routes';

const server = express();

server.use(router);



server.listen(5000, () => {
	console.log('Server is running on http://localhost:5000');
});
