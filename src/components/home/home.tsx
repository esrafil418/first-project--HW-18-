import { useState } from "react";
import ProductCard from "../shared/cards/product-card";
import { products } from "../../constants/mock-data/products";
import Header from "./header";
import SubmitOrder from "../base/buttons/submit-order";
import Total from "./total";

type CartItem = {
  id: number;
  quantity: number;
};

export default function HomeComponent() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prev.filter((item) => item.id !== id);
      }
    });
  };

  const getQuantity = (id: number) =>
    cart.find((item) => item.id === id)?.quantity ?? 0;

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const handleSubmitOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    setCart([]);
  };


  return (
    <>
      <Header />

      <h2 className="text-2xl font-bold my-6 text-center"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 container mx-auto px-4">
        {products.map((product) => (
          <ProductCard
            key={`normal-${product.id}`}
            {...product}
            quantity={getQuantity(product.id)}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold my-6 text-center">Bill</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 container mx-auto px-4">
        {products.map((product) => (
          <ProductCard
            key={`qty-only-${product.id}`}
            {...product}
            quantity={getQuantity(product.id)}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            showQtyOnly={true}
          />
        ))}
      </div>
      <Total amount={calculateTotal()} />
      <SubmitOrder onClick={handleSubmitOrder} />
    </>
  );
}
