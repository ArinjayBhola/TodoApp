const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong Input",
        });
    };

    // Put it in mongoDB
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });
    res.json({ msg: "Todo created successfully" });
});

app.get('/todos', async (req, res) => {
    const todo = await Todo.find();
    res.json({ todo });
});

app.put('/completed', async (req, res) => {
    try {
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);
        if (!parsedPayload.success) {
            return res.status(411).json({
                msg: "Wrong Input",
            });
        };
        await Todo.updateOne({
            _id: req.body._id,
        }, {
            completed: true
        });
        res.json({
            msg: "Todo updated successfully"
        })
    } catch (e) {
        console.log(e)
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});