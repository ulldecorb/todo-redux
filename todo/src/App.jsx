import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import List from './components/list';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <List />
    </Provider>
  );
}

export default App;
