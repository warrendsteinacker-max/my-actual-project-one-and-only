import {dotenv} from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cores';
import path from 'path';
import {fileURLToPath} from 'fileURLToPath';
import { connectDB } from './config/db.js/connectDB';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();

connectDB()

app.use(cors ({
    origin: '*',
    methods: ["PUT", "POST", "DELETE", "GET"],
    allowedHeaders: ["Content-Type": "Authorization"],
    credentails: true,

}))

app.use(express.json())