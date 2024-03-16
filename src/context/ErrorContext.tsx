import React, {
  createContext,
  useContext,
  useCallback,
  ReactNode,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { clearError } from "../store/slices/error/errorSlice";

interface ErrorContextType {
  error: string | null;
  handleErrorClear: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.error.error);

  const handleErrorClear = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <ErrorContext.Provider value={{ error, handleErrorClear }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useGlobalError = (): ErrorContextType => {
  const context = useContext(ErrorContext);

  if (context === undefined) {
    throw new Error("Must be used within an ErrorProvider");
  }

  return context;
};
