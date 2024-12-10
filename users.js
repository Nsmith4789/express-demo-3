import data from "../data.json" with { type: "json" };
console.log(data);

const router = express.Router();


router.get("/hello", (req, res) => {
  res.send("Hello users");
});


router.get("/", (req, res) => {
  res.send("List of all users");
});


router.get("/:id", (req, res) => {
  const user = data.find((u) => u.id === parseInt(req.params.id, 10));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});


router.post("/", (req, res) => {
  const newUser = req.body;
  data.push(newUser);
  res.status(201).send("User added successfully");
});

export default router;