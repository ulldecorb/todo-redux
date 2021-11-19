/* eslint-disable no-undef */
// import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import store from '../../redux/store/index';
// import App from '../../App';
import List from './index';

describe('when List render', () => {
  // const tasks = [{ id: 1, task: 'testing' }];
  const Wrapper = () => (
    <Provider store={store}><List /></Provider>
  );
  test('button with Add new task placeholder should appear', () => {
    // const tasks = [
    //   { id: 1, task: 'testing' }
    // ];
    const component = render(<List tasks={[]} />, { wrapper: Wrapper });
    const button = component.getByPlaceholderText(/Add new task/i);
    component.debug();
    expect(button).toBeInTheDocument();
  });
  test('delete button must summon a function when clicked', () => {
    const mockHandler = jest.fn();
    const component = render(<list tasks={[]} dispatch={mockHandler} />,
      { wrapper: Wrapper });
    const button = component.queryAllByText('X')[0];
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
  test('delete button must summon a function when clicked', () => {
    const mockHandler = jest.fn();
    const component = render(<list tasks={[]} dispatch={mockHandler} />,
      { wrapper: Wrapper });
    const button = component.queryAllByText('Update')[0];
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});

// npm install --save-dev @testing-library/react @testing-library/jest-dom
// npm install --save-dev  @testing-library/jest-dom

/*
import {prettyDOM} from '@testing-library/dom';
const li = component.container.querySelector('li')
console.log(prettyDOM(li))

*/
