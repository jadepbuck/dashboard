import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

test('renders without crashing', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});