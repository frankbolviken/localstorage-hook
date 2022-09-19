import useLocalStorage from '../dist';
import { act, renderHook } from '@testing-library/react';

describe('it', () => {
  it('renders correct default value', () => {
    const { result } = renderHook(() => useLocalStorage('name', 'john'));
    expect(result.current[0]).toEqual('john');
  });

  it('renders correct default value', () => {
    const { result } = renderHook(() => useLocalStorage('name', 'john'));
    act(() => {
      result.current[1]('Doe');
    });
    expect(result.current[0]).toEqual('Doe');
  });
});
