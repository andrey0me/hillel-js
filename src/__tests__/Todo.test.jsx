import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../pages/Todo';
import '@testing-library/jest-dom';

describe('TODO tests', () => {
  test('1. Страница содержит заголовок TODO', () => {
    render(<Todo />);
    expect(screen.getByText(/TODO список/i)).toBeInTheDocument();
  });

  test('2. Поле принимает текст и цифры', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText(/Нова задача/i);
    fireEvent.change(input, { target: { value: 'Test123' } });
    expect(input).toHaveValue('Test123');
  });

  test('3. Нельзя добавить пустую задачу', () => {
    render(<Todo />);
    fireEvent.click(screen.getByText(/Додати/i));
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  test('4. После добавления задача появляется в списке', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText(/Нова задача/i);
    fireEvent.change(input, { target: { value: 'Learn React' } });
    fireEvent.click(screen.getByText(/Додати/i));
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  test('5. Чекбокс работает и зачеркивает текст', () => {
    render(<Todo />);
    fireEvent.change(screen.getByPlaceholderText(/Нова задача/i), {
      target: { value: 'Check me' },
    });
    fireEvent.click(screen.getByText(/Додати/i));
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Check me')).toHaveClass('text-decoration-line-through');
  });
});
