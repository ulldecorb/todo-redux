/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Header from './index';

test('when Header render', () => {
  const header = render(<Header />);
  const title = header.getByText(/todo list/i);
  expect(title).toBeInTheDocument();
});
