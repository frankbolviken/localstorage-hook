import React from 'react';

const useLocalStorage = <T>(
  storageKey: string,
  fallbackState: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = React.useState<T>(fallbackState);

  React.useEffect(() => {
    const orders = localStorage.getItem(storageKey);
    if (orders) {
      setValue(JSON.parse(orders));
    }
  }, [storageKey]);

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
