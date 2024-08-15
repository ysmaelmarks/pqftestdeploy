// app/context/LayoutContext.tsx
'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface LayoutContextProps {
  showHeader: boolean;
}

const LayoutContext = createContext<LayoutContextProps>({ showHeader: true });

export const LayoutProvider = ({ children, showHeader }: { children: ReactNode, showHeader: boolean }) => {
  return (
    <LayoutContext.Provider value={{ showHeader }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
