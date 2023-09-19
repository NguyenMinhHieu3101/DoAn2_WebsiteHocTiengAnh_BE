const express = require("express")
const connectDb = require("./config/dbConnection")
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors");


connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use(cors());

app.use(express.json());
app.use("/api/contacts", require("./routes/contact1Routes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/vocabulary", require("./routes/vocabRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/games", require("./routes/gameRoutes"));
app.use("/api/contact", require("./routes/contact1Routes"));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});