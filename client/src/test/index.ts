import express, { Request, Response } from 'express';
import path from 'path';
const app = express();
const root = path.join(__dirname, "../","..")
const rootPublic = path.join(__dirname, "../", "../", "public")
console.log(root)
console.log(rootPublic)
// app.use(express.static(path.join(__dirname, './'), {
//   setHeaders: (res, filePath) => {
//     if (filePath.endsWith('.js')) {
//       res.setHeader('Content-Type', 'application/javascript');
//     }
//   },
// }));
app.use(express.static(rootPublic));
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, "index.html"));
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});