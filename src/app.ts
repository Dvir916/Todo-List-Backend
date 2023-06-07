import 'reflect-metadata';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { ApiRouter } from './routes/api';

dotenv.config();

const app = express().disable('etag').disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const IS_DEV = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

if (IS_DEV) {
  app.use(cors());
}

let apolloCors;
if (IS_DEV) {
  apolloCors = {
    origin: 'http://localhost:3001',
    credentials: true,
  };
}

app.use(ApiRouter);

export { app };
