/* eslint-disable no-undef */
// import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store/index';
import List from './index';

describe('when List render', () => {
  const Wrapper = () => (
    <Provider store={store}><List /></Provider>
  );
  test('button with Add new task placeholder should appear', () => {
    const component = render(<List tasks={[]} />, { wrapper: Wrapper });
    const button = component.getByPlaceholderText(/Add new task/i);
    expect(button).toBeInTheDocument();
  });
  test('delete button must summon a function when clicked', () => {
    const mockHandler = jest.fn();
    const component = render(<List tasks={[]} dispatch={mockHandler} />,
      { wrapper: Wrapper });
    const button = component.queryAllByText('X')[0];
    button.onclick = mockHandler;
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  test('delete button must summon a function when clicked', () => {
    const mockHandler = jest.fn();
    const component = render(<List tasks={[]} />,
      { wrapper: Wrapper });
    const button = component.queryAllByText('Update')[0];
    button.onclick = mockHandler;
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  test('input value must change', () => {
    const component = render(<List tasks={[]} />,
      { wrapper: Wrapper });
    const input = component.queryAllByPlaceholderText('Update task')[0];
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});

// npm install --save-dev @testing-library/react @testing-library/jest-dom
// npm install --save-dev  @testing-library/jest-dom

// import userEvent from '@testing-library/user-event';

/*
import {prettyDOM} from '@testing-library/dom';
const li = component.container.querySelector('li')
console.log(prettyDOM(li))
li.debug()
*/
