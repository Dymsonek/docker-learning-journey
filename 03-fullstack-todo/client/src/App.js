import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API base URL
  const API_URL = process.env.REACT_APP_API_URL || '/api';

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching todos:', err);
      setError('Failed to load todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/todos`, newTodo);
      setTodos([response.data, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo');
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const todo = todos.find(t => t.id === id);
      const response = await axios.put(`${API_URL}/todos/${id}`, {
        ...todo,
        completed: !completed
      });
      setTodos(todos.map(t => t.id === id ? response.data : t));
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      setTodos(todos.filter(t => t.id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo');
    }
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading todos...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>🐳 Fullstack TODO App</h1>
          <p>React + Node.js + PostgreSQL + Docker</p>
        </header>

        {error && <div className="error">{error}</div>}

        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            className="todo-input"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            className="todo-input"
          />
          <button type="submit" className="add-btn">Add TODO</button>
        </form>

        <div className="todos-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>No todos yet! Add one above 👆</p>
            </div>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-content" onClick={() => toggleTodo(todo.id, todo.completed)}>
                  <div className="checkbox">
                    {todo.completed && '✓'}
                  </div>
                  <div className="todo-text">
                    <h3>{todo.title}</h3>
                    {todo.description && <p>{todo.description}</p>}
                  </div>
                </div>
                <button 
                  onClick={() => deleteTodo(todo.id)} 
                  className="delete-btn"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        <footer>
          <p>{todos.filter(t => !t.completed).length} items left</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
