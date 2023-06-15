import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fish link', () => {
  render(<App />);
  // Make sure the pattern matches the exact text you are looking for
  const linkElement = screen.getByText(/Fish/);
  expect(linkElement).toBeInTheDocument();
});
