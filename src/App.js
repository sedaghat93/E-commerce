import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CartPage,
  HomePage,
  ProductSinglePage,
  SearchPage,
} from "./pages/index";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "./store/store";
import CategoryProductPage from "./pages/CategoryProduct/CategoryProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AuthProvider from "./provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Orders from "./Components/Order/Orders";
import Favorites from "./Components/Favorite/Favorites";
import DashBoardContent from "./Components/DashBoardContent/DashBoardContent"


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Sidebar />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductSinglePage />} />
              <Route
                path="/category/:category"
                element={<CategoryProductPage />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/search/:searchTerm" element={<SearchPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashBoard />}>
                <Route index element={<DashBoardContent/>} />
                <Route path="order" element={<Orders />} />
                <Route path="favorite" element={<Favorites />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
