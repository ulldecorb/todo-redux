/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import index from './index';

test('when main index', () => {
  render(index);
  const renderApp = screen.getByTag('App');
  expect(renderApp).toBeInTheDocument();
});
