import { useState } from "react";

export enum ProgressState {
  unset = "unset",
  loading = "loading",
  success = "success",
  failure = "failure",
}
export const useProgressState = () => {
  const [progress, setProgress] = useState<ProgressState>(ProgressState.unset);
  const [error, setError] = useState<
    { message: string; code?: number } | undefined
  >();

  return {
    setDefault: () => {
      setProgress(ProgressState.unset);
      setError(undefined);
    },
    setSuccess: () => {
      setProgress(ProgressState.success);
      setError(undefined);
    },
    setFailure: (errorMessage: string, code?: number) => {
      setProgress(ProgressState.failure);
      setError({ message: errorMessage, code });
    },
    setLoading: () => {
      setProgress(ProgressState.loading);
      setError(undefined);
    },
    progress,
    error,
  };
};
