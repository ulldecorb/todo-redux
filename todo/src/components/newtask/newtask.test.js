/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store/index';
import AddTask from './index';

describe('when AddTask is render', () => {
  const Wrapper = () => (
    <Provider store={store}><AddTask /></Provider>
  );
  const component = render(<AddTask tasks={[]} />, { wrapper: Wrapper });
  test('input value change when write on it', () => {
    const input = component.getByPlaceholderText('Add new task');
    fireEvent.change(input, { target: { value: 'test it' } });
    expect(input.value).toBe('test it');
  });
});
