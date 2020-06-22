import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    console.log('hi')

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

