import { useCallback } from 'react';

const useScrollLock = () => {
  const lock = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    document.body.style.overflow = 'unset';
  }, []);

  return { lock, unlock };
};

export default useScrollLock;
