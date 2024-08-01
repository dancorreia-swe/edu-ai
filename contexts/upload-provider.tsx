"use client";

import React, {
  PropsWithChildren,
  useState,
  useContext,
  createContext,
} from "react";

type UploadContextType = {
  dropped: boolean;
  setDropped: (state: boolean) => void;
  resetDropped: () => void; // New method to reset the dropped state
};

const UploadContext = createContext<UploadContextType | null>(null);

const UploadProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [dropped, setDropped] = useState<boolean>(false);

  const resetDropped = () => {
    setDropped(false);
  };

  const context = { dropped, setDropped, resetDropped };

  return (
    <UploadContext.Provider value={context}>{children}</UploadContext.Provider>
  );
};

export const useUpload = (): UploadContextType => {
  const context = useContext(UploadContext);
  if (context === null) {
    throw new Error("useUpload must be used within an UploadProvider");
  }

  return context;
};

export default UploadProvider
