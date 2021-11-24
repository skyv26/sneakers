import React from "react";
import CartProvider from "./store/CartProvider";
import ProductLayout from "./components/Layout/ProductLayout";
import Wrapper from "./components/Layout/Wrapper";
import ProductNavigation from "./components/ProductNavigation/ProductNavigation";
import ProductCorousal from "./components/ProductCorousal/ProductCorousal";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductFooter from "./components/ProductFooter/ProductFooter";


function App() {
  return (
    <CartProvider>
      <ProductLayout>
        <ProductNavigation />
        <Wrapper>
          <ProductCorousal />
          <ProductDescription />
        </Wrapper>
      </ProductLayout>
      <ProductFooter />
    </CartProvider>
  );
}

export default App;
