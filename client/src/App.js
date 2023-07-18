import { useDispatch, useSelector } from 'react-redux';
import { fetchTickers } from './redux/tickers-store';

function App() {
  const dispatch = useDispatch();
  
  console.log(dispatch);
  return (
    <h1>Hello world!</h1>
  );
}

export default App;
