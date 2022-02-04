import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Filter Movies', () => {
  render(<App />);
  const linkElement = screen.getByText(/Filter Movies/i);
  expect(linkElement).toBeInTheDocument();
});
