import * as express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import routes from "./routes/iban.route";
import * as cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then((res) => {
    console.log("Connected to Distribution API Database - Initial Connection");
  })
  .catch((err) => {
    console.log(`error -`, err);
  });

app.use("/v1", routes);

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.json({
    message: "pong",
  });
});

app.listen(PORT, () => {
  console.log(`Application listening on port123 ${PORT}`);
});
