import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalChildren {
  children: React.ReactNode;
  isMounted: boolean;
}

const Portal = ({ children, isMounted }: PortalChildren) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector('body');
  }, []);

  return isMounted && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
