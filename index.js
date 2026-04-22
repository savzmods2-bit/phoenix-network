import express from 'express';
import { createServer } from 'node:http';
import { scramjetPath } from '@mercuryworkshop/scramjet/path';
import path from 'node:path';

const app = express();
const server = createServer(app);
const __dirname = process.cwd();

// Serves the files in your 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serves the Scramjet engine files
app.use('/scram/', express.static(scramjetPath));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`PHOENIX ONLINE: Port ${PORT}`);
});
