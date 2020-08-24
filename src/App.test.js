import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Create Todo link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Create Todo/i);
  expect(linkElement).toBeInTheDocument();
});
