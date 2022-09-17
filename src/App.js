import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux/es/exports";

function App() {
  const cartToggle = useSelector((state) => state.ui.cartVisibility);

  return (
    <Layout>
      {cartToggle && <Cart />} 
      <Products />
    </Layout>
  );
}

export default App;
