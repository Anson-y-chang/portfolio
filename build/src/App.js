import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import RouteEcommerce from "./pages/EcommerceWebsite/route/route"
import { CartContextProvider } from './pages/EcommerceWebsite/context/CartContext';
import { SearchContextProvider } from './pages/EcommerceWebsite/context/SearchContext';
import RouteTwice from "./pages/Twice/route/route"
import RouteBookkeep from './pages/Bookkeeping/route/Bookkeep';
import { RecordsContextProvider } from './pages/Bookkeeping/context/RecordsContext';
import NotFound from './components/NotFound';

function App() {
  return (
    <SearchContextProvider>
      <CartContextProvider>
        <RecordsContextProvider>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/ecommerce/*' element={<RouteEcommerce />}></Route>
              <Route path='/twice/*' element={<RouteTwice />}></Route>
              <Route path='/bookkeep/*' element={<RouteBookkeep />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </RecordsContextProvider>
      </CartContextProvider>
    </SearchContextProvider>
  );
}

export default App;
