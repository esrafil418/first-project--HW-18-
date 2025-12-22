import ProductCard from "../shared/cards/product-card";
import { products } from "../../constants/mock-data/products";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </>
  );
}
