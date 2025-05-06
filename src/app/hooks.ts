import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useScreenSize = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    isLargeScreen,
    isXLargeScreen,
  };
};

export const useSequentialDelay = (incrementMs: number = 100) => {
  return useMemo(() => {
    let currentDelay = 0;
    return {
      next: () => {
        const delay = currentDelay;
        currentDelay += incrementMs;
        return delay;
      },
      reset: () => {
        currentDelay = 0;
      },
    };
  }, [incrementMs]);
};
