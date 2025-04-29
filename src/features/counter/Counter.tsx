import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Button } from "@mui/material";
import { increment } from "./counter-slice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button variant="outlined" onClick={() => dispatch(increment())}>
      count is {count}
    </Button>
  );
};

export default Counter;
