import Express from "express";
import Parser from "body-parser";
import Routes from "./Routes/users.js";

const App = Express();
const PORT = 5000;

App.use(Parser.json());

App.use("/users", Routes);

App.get("/", (req, res) => res.send("HELLO FROM HOGWARTS EXPRESS"));

App.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));