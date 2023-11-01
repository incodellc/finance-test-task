import './styles/main.scss';
import { Provider } from 'react-redux';
import Stock from './components/Stock';
import { store } from './store/store';
import FavoriteModal from './components/Modal';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <FavoriteModal />
      <Stock />
    </Provider>
  );
}

export default App;
