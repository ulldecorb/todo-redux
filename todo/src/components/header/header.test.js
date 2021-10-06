/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Header from './index';

test('when Header render', () => {
  render(<Header />);
  const title = screen.getByText(/todo list/i);
  expect(title).toBeInTheDocument();
});
