import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';


test('adds a new todo', () => {
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);


    fireEvent.change(screen.getByPlaceholderText(/What needs to be done?/i), { target: { value: 'New Todo' } });



    fireEvent.submit(screen.getByRole('form'));


    expect(addTodo).toHaveBeenCalledWith('New Todo');
});