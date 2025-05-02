import { createSlice } from "@reduxjs/toolkit";

export enum DisplayScreenPage {
  LandingPage = "LandingPage",
  WorkPage = "WorkPage",
}

interface DisplayScreenPageState {
  pages: DisplayScreenPage[];
  currentPageIdx: number;
}

const initialState: DisplayScreenPageState = {
  pages: [DisplayScreenPage.LandingPage, DisplayScreenPage.WorkPage],
  currentPageIdx: 0,
};

const displayScreenPageSlice = createSlice({
  name: "displayScreenPage",
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.currentPageIdx < state.pages.length - 1) {
        state.currentPageIdx += 1;
      }
    },
    previousPage: (state) => {
      if (state.currentPageIdx > 0) {
        state.currentPageIdx -= 1;
      }
    },
  },
});

export const { nextPage, previousPage } = displayScreenPageSlice.actions;
export default displayScreenPageSlice.reducer;
