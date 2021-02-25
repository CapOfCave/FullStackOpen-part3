const express = require("express");
const morgan = require("morgan");
morgan.token('body', function (req, _) { return JSON.stringify(req.body) })


const app = express();

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const persons = [
  {
    name: "John LeBron",
    number: "25235",
    id: 1,
  },
  {
    name: "Abeaah",
    number: "1515",
    id: 2,
  },
  {
    name: "John Joy",
    number: "1421",
    id: 3,
  },
];

const generateId = () => {
  for (let i = 0; i < 3; i++) {
    const id = Math.floor(Math.random() * 1000);
    if (!persons.find((person) => person.id === id)) {
      return id;
    }
  }

  return -1;
};

app.get("/", (_, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/info", (_, response) => {
  const personCount = persons.length;
  const requestTime = new Date();
  response.send(`<p>Phonebook has info for ${personCount} people.</p>
    <p>${requestTime.toString()}</p>
    `);
});

app.get("/api/persons", (_, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (!person) {
    return response.status(404).end();
  }

  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  const index = persons.indexOf(person);
  if (index !== -1) {
    persons.splice(index, 1);
  }

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const number = Number(body.number);

  if (!body.name) {
    return response.status(400).json({ error: "name must not be empty" });
  }
  if (!body.number) {
    return response.status(400).json({ error: "number must not be empty" });
  }
  if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({ error: "name already exists" });
  }

  const person = {
    name: body.name,
    number: number,
    date: new Date(),
    id: generateId(),
  };

  persons.push(person);
  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
