import React from "react";
import { makeStyles } from "@material-ui/core";
import Board from "./components/board";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100% ",
    margin: 0,
    padding: 0,
  },
}));

const Tasker = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
};

export default Tasker;
