import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list link', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo list/i);
  expect(linkElement).toBeInTheDocument();
});
