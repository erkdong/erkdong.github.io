import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useTheme, useMediaQuery } from "@mui/material";

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
