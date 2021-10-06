/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getElementsByTagName('Header')[0];
  expect(header).toBeInTheDocument();
});
