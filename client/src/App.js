import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Common/Loader";
import {
  subscribeToTicker,
  unSubscribeToTicker,
  reconnectToTicker,
} from "./redux";
import { socket } from "./socket";
import Box from "./components/Common/Box";
import Table from "./components/Common/Table";
import moment from "moment";
import { ReactComponent as ArrowUp } from "./Images/arrowUp.svg";
import { ReactComponent as ArrowDown } from "./Images/arrowDown.svg";
import copy from "./copy";
import Button from "./components/Common/Button";
import TimerForm from "./components/Main/TImerForm";

function App() {
  const dispatch = useDispatch();
  const { stocks, loading } = useSelector((state) => state.stocks);
  const columns = [
    { field: "companyName", headerName: copy.table.columns.company },
    { field: "price", headerName: copy.table.columns.price },
    { field: "last_trade_time", headerName: copy.table.columns.tradeTime },
    { field: "differance", headerName: copy.table.columns.differance },
  ];
  const rows = stocks.map(({ ticker, price, last_trade_time, differance }) => {
    return {
      companyName: copy[ticker],
      price: `${price} $`,
      last_trade_time: moment(last_trade_time).format("DD MMMM HH:mm"),
      differance: differance,
    };
  });

  useEffect(() => {
    dispatch(subscribeToTicker(socket));
    return () => dispatch(unSubscribeToTicker(socket));
  }, [dispatch]);
  if (loading && !stocks.length) {
    return <Loader type="spinner" />;
  }
  return (
    <Box minHeight="100vh" height="100vh" backgroundColor="var(--light-gray)">
      <Box
        margin="auto"
        maxWidth="975px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="50px"
        height="100%"
        backgroundColor="white"
      >
        <Box display="flex" alignItems="center">
          <Box as="h3" fontSize="32px" mr="16px">
            {copy.table.header}
          </Box>
          <Button
            onClick={() => {
              if (socket.connected)
                return dispatch(unSubscribeToTicker(socket));
              dispatch(reconnectToTicker(socket));
            }}
          >
            <Box display="flex" alignItems="center">
              {socket.connected ? copy.disconnect : copy.connect}
              {loading && <Loader />}
            </Box>
          </Button>
        </Box>
        <TimerForm />
        <Table
          columns={columns}
          rows={rows}
          renderTableData={(td, { field, currentRow }) => {
            const isDifferance = field === "differance";
            return (
              <>
                <Box mr={isDifferance && "6px"} display="inline-block">
                  {isDifferance ? `${td} $` : td}
                </Box>
                {isDifferance &&
                  (currentRow[field] < 0 ? <ArrowDown /> : <ArrowUp />)}
              </>
            );
          }}
        ></Table>
      </Box>
    </Box>
  );
}

export default App;
