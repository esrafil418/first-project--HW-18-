import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  onAddToCart?: (id: number) => void;
  onRemoveFromCart?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  img,
  price,
  onAddToCart,
  onRemoveFromCart,
}: ProductCardProps) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onAddToCart?.(id);
  };

  const handleRemove = () => {
    setCount(count - 1);
    onRemoveFromCart?.(id);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 m-2 flex flex-col items-center">
      <img src={img} alt={name} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>

      <div className="flex items-center justify-between w-full mt-4">
        <button
          onClick={handleRemove}
          disabled={count === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          -
        </button>

        <span className="text-xl font-bold">{count}</span>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
