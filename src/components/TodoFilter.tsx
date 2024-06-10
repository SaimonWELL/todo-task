import React from 'react';

interface TodoFilterProps {
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    clearCompleted: () => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ setFilter, clearCompleted }) => {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={clearCompleted}>Clear completed</button>
        </div>
    );
};

export default TodoFilter;
