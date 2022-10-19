
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tickersState } from "./common/atoms";
import { socket } from './common/socket'

function App() {
  const [tickers, setTickers] = useRecoilState(tickersState)

  useEffect(() => {
    socket.on('ticker', (data) => {
      setTickers(data)
    })

    return () => {
      socket.off('ticker')
    }
  }, [])


  return (
    <div className="App">
      <p>
        {tickers.length ? 'true' : 'flase'} - tickers
      </p>
    </div>
  );
}

export default App;
