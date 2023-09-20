import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./Action/userAction";
import { RotatingLines } from "react-loader-spinner";
import User from "./User";
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error } = userList;
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>React-Redux</h1>

      {loading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <User />
      )}
    </div>
  );
}

export default App;
