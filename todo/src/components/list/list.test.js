/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import List from './index';

describe('when List render', () => {
  test('show x on delete button', () => {
    render(<List />);
    const deleteSimbol = screen.getByText(/x/ig);
    expect(deleteSimbol).toBeInTheDocument();
  });
});
