import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from './pages/index';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Sidebar/>

          <Routes>
            <Route path='/' element={<HomePage/ >} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
