/* eslint-disable no-undef */
import { render, document } from '@testing-library/react';
import actionTypes from './actionTypes';

test('actiontypes are in the document', () => {
  render(actionTypes);
  const addType = document.getByText(/add_task/i);
  expect(addType).toBeInTheDocument();
});
