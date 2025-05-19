export enum Dialogs {
  FUTURBEATS = "futurbeats",
  DEWEY = "dewey",
  MINESWEEPER = "minesweeper",
  STORE_ALERTS = "store-alerts",
}

export interface DialogProps {
  open: boolean;
  onClose: () => void;
}
