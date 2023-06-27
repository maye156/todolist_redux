import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './store';

const TodoList = ({ todos, addTodo, toggleTodo }) => {

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    const handleToggleTodo = (id) => {
        toggleTodo(id);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => handleToggleTodo(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addTodo,
    toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
