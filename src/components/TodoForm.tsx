import React, { useState } from 'react';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} role="form">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
};

export default TodoForm;
