import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Title must be atleast 3 characters"],
        maxlength: [30, "Title must not exceed 30 characters"]
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "description must be atleast 10 characters"],
        maxlength: [500, "Title must not exceed 500 characters"]

    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

todoSchema.index({ completed: 1 });

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;