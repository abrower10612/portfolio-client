import { useCallback } from 'react';

const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = 'unset';
  }, []);

  return { lockScroll, unlockScroll };
};

export default useScrollLock;
