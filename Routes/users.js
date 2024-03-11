import Express from "express";
import { v4 as uuidv4 } from "uuid";
const Router = Express.Router();

// Mock database
let users = [
    {
      First_Name: "Nigel",
      Last_Name: "Williams",
      Email: "nigel.williams@utas.edu.au"
    },
    {
      First_Name: "Adrian",
      Last_Name: "Dillon",
      Email: "adrian.dillon@utas.edu.au"
    },
    {
      First_Name: "Craig",
      Last_Name: "Squires",
      Email: "csquires@challenger.com.au"
    },
    {
      First_Name: "Jeremy",
      Last_Name: "Brennan",
      Email: "jbrennan@challenger.com.au"
    },
    {
      First_Name: "Cameron",
      Last_Name: "Kerr",
      Email: "ckerr@challenger.com.au"
    },
    {
      First_Name: "Greg",
      Last_Name: "Burns",
      Email: "gburns@challenger.com.au"
    }   
  ];

// Getting the list of users from the mock database
Router.get('/', (req, res) => {
    res.send(users);
})

// Add new user with ID (POST)
Router.post("/", (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`${user.First_Name} has been added to the Database`);
});

// Get the user by ID (GET)
Router.get("/:id", (req, res) => {
    const {id} = req.params;
    const userFound = users.find((user) => user.id === id);
    res.send(userFound);
});

// Delete the user by ID (DELETE)
Router.delete("/:id", (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`${id} deleted successfully from database!`);
});

// Modifying user data with ID (PATCH)
Router.patch("/:id", (req, res) => {
    const {id} = req.params;
    const {First_Name, Last_Name, Email} = req.body;
    const user = users.find((user) => user.id === id);

    if(First_Name) user.First_Name = First_Name;
    if(Last_Name) user.Last_Name = Last_Name;
    if(Email) user.Email = Email;

    res.send(`User with ${id} has been updated`);
});

export default Router;

/*
New users data
{
    "First_Name": "Chris",
    "Last_Name": "Milano",
    "Email": "chrism@sodastream.com"
  },
  {
    "First_Name": "Nahuel",
    "Last_Name": "Lando",
    "Email": "nahuel.lando@sodastream.com"
  },
  {
    "First_Name": "Robert",
    "Last_Name": "Hedwall",
    "Email": "robert.hedwall@sodastream.com"
  }
*/