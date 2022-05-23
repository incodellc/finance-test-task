import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { subscribeToTicker } from "./redux";
import { socket } from "./socket";
function App() {
  const dispatch = useDispatch();
  const { stocks, loading } = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(subscribeToTicker(socket));
  }, [dispatch]);
  return <div>{loading && <Loader></Loader>}</div>;
}

export default App;
