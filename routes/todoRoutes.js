import express from "express";
import todoController from "../controllers/todoController.js";

const router = express.Router();

router.route("/")
    .get((req, res) => todoController.getTodos(req, res))
    .post((req, res) => todoController.createTodo(req, res))
router.route('/:id')
    .get((req, res) => todoController.getTodoById(req, res))
    .put((req, res) => todoController.updateTodo(req, res))
    .delete((req, res) => todoController.deleteTodo(req, res))

export default router;