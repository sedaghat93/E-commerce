import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartPage, HomePage, ProductSinglePage, SearchPage } from './pages/index';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from './store/store';
import CategoryProductPage from './pages/CategoryProduct/CategoryProductPage';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Sidebar/>

          <Routes>
            <Route path='/' element={<HomePage/ >} />
            <Route path='/product/:id' element={<ProductSinglePage/>} />
            <Route path='/category/:category' element={<CategoryProductPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/search/:searchTerm' element={<SearchPage/>} />           
          </Routes>

          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
