const express = require("express");
const cors = require("cors");
const app = express();

const port = 3005;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

let employes = [
  {
    firstName: "abc",
    lastName: "xyz",
    domain: "cloud",
    position: "Jr",
    exp: 2,
    email: "abc@yahho.com",
    ctc: 100000000,
    country: "India",
    id: Math.random(),
    date: new Date(),
  },
  {
    firstName: "EFG",
    lastName: "PQR",
    domain: "SEQURITY",
    position: "SR",
    exp: 5,
    email: "EFG@yahho.com",
    ctc: 900000000,
    country: "UK",
    id: Math.random(),
    date: new Date(),
  },
];

app.get("/employess", (req, res) => {
  res.send({ status: 200, allemployes: employes });
});

app.post("/addemp", (req, res) => {
  const { firstName, lastName, domain, position, exp, email, ctc, country } =
    req.body;
  if (
    firstName &&
    lastName &&
    domain &&
    position &&
    exp &&
    email &&
    ctc &&
    country
  ) {
    employess = [
      ...employes,
      {
        firstName,
        lastName,
        domain,
        position,
        exp,
        email,
        ctc,
        country,
        id: Math.random(),
        
      },
    ];
    res.send({ status: 200, msg: "person added", employess });
  } else {
    res.send({ status: 500, msg: "something went wrong" });
  }
});

app.post("/add", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    users = [...users, { email, password, id: Math.random(),  date: new Date(), }];
    res.send({ status: 200, msg: "user added", users });
  } else {
    res.send({ status: 500, msg: "something went wrong" });
  }
});

app.listen(port, () => {
  console.log("Server started on port   " + port, "with node JS");
});

app.listen;
