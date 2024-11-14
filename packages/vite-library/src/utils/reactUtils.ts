import { useState } from 'react';

import { VoidFunctionWithArgs } from '../types/types.d';

function useThrottle<T extends VoidFunctionWithArgs>(func: T, limit = 200) {
  const [inThrottle, setInThrottle] = useState(false);

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      setInThrottle(true);
      setTimeout(() => {
        setInThrottle(false);
      }, limit);
    }
  };
}

function useDebounce<T extends VoidFunctionWithArgs>(func: T, timeout = 200) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export { useDebounce, useThrottle };
