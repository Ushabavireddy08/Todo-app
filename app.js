const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 3000;

mongoose.connect("mongodb+srv://ushabsr99:o4QdHvCGSQhfSsfS@todoapp.hlkz6ge.mongodb.net/todo")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:",err));
const trySchema = new mongoose.Schema({ name: String });
const Item = mongoose.model("Task", trySchema);
const todo = new Item({ name: "usha" });
//todo.save();

app.get("/", (_, res) => {
    Item.find({})
        .then(foundItems => {
            res.render("list", { ejes: foundItems });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Something Went Wrong");
        });
});

app.post("/", (req, res) => {
    const ItemName = req.body.ele1;
    const todo = new Item({ name: ItemName });
    todo.save();
    res.redirect("/");
});

app.post("/delete", async (req, res) => {
    const checked = req.body.checkbox1;
    try {
        await Item.findByIdAndDelete(checked);
        console.log("Deleted Item with ID", checked);
        res.redirect("/");
    }
    catch (err) {
        console.error("Error Deleting Item", err);
        res.status(500).send("Error Deleting Item");
    };
});

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:3000`);
});