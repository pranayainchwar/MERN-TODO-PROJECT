import mongoose from 'mongoose';
// we are here doing validate what ever coming from frontend

const TodoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const todo = mongoose.model('todo', TodoSchema);
export default todo;