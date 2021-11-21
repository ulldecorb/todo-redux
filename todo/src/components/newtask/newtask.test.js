/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store/index';
import AddTask from './index';

describe('when AddTask is render', () => {
  const Wrapper = () => (
    <Provider store={store}><AddTask /></Provider>
  );
  test('input value change when write on it', () => {
    const component = render(<AddTask tasks={[]} />, { wrapper: Wrapper });
    const input = component.getByPlaceholderText('Add new task');
    fireEvent.change(input, { target: { value: 'test it' } });
    expect(input.value).toBe('test it');
  });
  test('input invoke function when keydown enter key', () => {
    const mockHandler = jest.fn();
    const component = render(<AddTask tasks={[]} dispatch={mockHandler} />, { wrapper: Wrapper });
    const input = component.getByPlaceholderText('Add new task');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});
