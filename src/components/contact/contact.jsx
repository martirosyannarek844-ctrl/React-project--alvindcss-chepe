import { useState } from 'react';

const Todo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'task 1', done: false },
    { id: 2, title: 'task 2', done: true },
  ]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), title: text, done: false }]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, title: editText } : t
      )
    );
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-300 to-gray-200">
      <div className="w-[420px] bg-[#ff6f6f] shadow-2xl">
        

        <div className="p-8 text-white">
          <h1 className="text-4xl font-light">Todo List</h1>
          <p className="text-sm opacity-80 mt-2">
            A simple React Todo List App
          </p>
          <hr className="mt-6 opacity-30" />
        </div>


        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between px-6 py-5 border-t border-white/20 text-white"
            >
              {editId === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 mr-4 px-2 py-1 text-black outline-none"
                />
              ) : (
                <span
                  className={`flex-1 ${
                    todo.done ? 'line-through opacity-50' : ''
                  }`}
                >
                  {todo.title}
                </span>
              )}

              <div className="flex gap-4 text-xl">
                {editId === todo.id ? (
                  <button onClick={() => saveEdit(todo.id)}>💾</button>
                ) : (
                  <button onClick={() => startEdit(todo)}>✏️</button>
                )}
                <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-white/20 text-white">
          <p className="mb-2">New todo</p>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="New Todo"
            className="w-full px-3 py-2 mb-4 text-black outline-none"
          />
          <button
            onClick={addTodo}
            className="border border-white px-6 py-2 uppercase text-sm tracking-wide hover:bg-white hover:text-[#ff6f6f] transition"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;