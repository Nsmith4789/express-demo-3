import express from "express";
import userRoutes from "./routes/users.js";

app.use("/users", userRoutes);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the main app!");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

// Users routes
app.get("/users/hello", (req, res) => {
  res.send("Hello users");
});

app.get("/users", (req, res) => {
  res.send("List of all users");
});

app.get("/users/:id", (req, res) => {
  const user = data.find((u) => u.id === parseInt(req.params.id, 10));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  data.push(newUser);
  res.status(201).send("User added successfully");
});

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
