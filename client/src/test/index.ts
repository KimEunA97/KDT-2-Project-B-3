import console from 'console';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const root = path.join(__dirname, '..', '..');
const rootPublic = path.join(root, '/public');
app.use(express.static(root));
app.use(express.static(rootPublic));

// 서비스 워커 파일을 별도의 경로로 제공
app.get('/service-worker.js', (req: Request, res: Response) => {
  res.sendFile(path.join(root,'src', 'service-worker.js'));
});

// manifest.json 요청에 대한 응답
app.get('/manifest.json', (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, 'manifest.json'));
});

// 나머지 요청은 index.html 파일로 응답
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, 'index.html'));
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
