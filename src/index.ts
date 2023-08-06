import 'dotenv/config';
import express, {type Request, type Response} from "express";
const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res:Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
