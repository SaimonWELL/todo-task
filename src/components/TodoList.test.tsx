import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../App';


const todos: Todo[] = [
    { id: 1, text: 'Test Todo', completed: false }
];

test('toggles a todo', () => {
    const toggleTodo = jest.fn();
    render(<TodoList todos={todos} toggleTodo={toggleTodo} />);


    fireEvent.click(screen.getByLabelText(/Test Todo/i));


    expect(toggleTodo).toHaveBeenCalledWith(1);
});
