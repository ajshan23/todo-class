import Todo from "../models/todoModel.js";


class TodoController {
    async getTodos(req, res) {
        try {
            const todos = await Todo.find();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: "Error gettting todos", error })
        }
    }

    async getTodoById(req, res) {
        try {
            const todo = await Todo.findById(req.params.id);
            if (!todo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(200).json(todo);
        } catch (error) {
            res.status(500).json({ message: 'Error getting todo', error });
        }
    }
    async createTodo(req, res) {
        console.log("ethy");

        const { title, description } = req.body;
        try {
            const newTodo = new Todo({
                title,
                description,
                completed: false,
            })

            await newTodo.save();
            res.status(200).json(newTodo);
        } catch (error) {
            res.status(500).json({ message: 'Error creating todo', error });
        }
    }
    async updateTodo(req, res) {
        try {
            const updateTodo = await Todo.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (!updateTodo) {
                return res.status(404).json({ message: "Todo not found" })
            }
            res.status(200).json(updateTodo)
        } catch (error) {
            res.status(500).json({ message: 'Error updating todo', error });
        }
    }

    async deleteTodo(req, res) {
        try {
            const deleteTodo1 = await Todo.findByIdAndDelete(req.params.id);
            if (!deleteTodo1) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(200).json({ message: 'Todo deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting todo', error });
        }
    }
}
const todoController = new TodoController();

export default todoController;