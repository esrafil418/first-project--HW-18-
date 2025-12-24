import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  showQtyOnly?: boolean;
  onAddToCart?: (id: number) => void;
  onRemoveFromCart?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  img,
  price,
  quantity,
  showQtyOnly = false,
  onAddToCart,
  onRemoveFromCart,
}: ProductCardProps) {

  const handleAdd = () => {
    onAddToCart?.(id);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      onRemoveFromCart?.(id);
    }
  };

  return (
    <div className="bg-[#1e3932] rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img src={img} alt={name} className="w-45 h-45 object-contain mb-6" />
      <h3 className="text-lg text-white font-semibold">{name}</h3>
      <p className="text-[#ebc8a0]">${price.toFixed(2)}</p>

      {showQtyOnly ? (
        <div className="mt-4">
          <p className="text-white text-lg">Qty: {quantity}</p>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full mb-0 mt-4">
          <button
            onClick={handleRemove}
            disabled={quantity === 0}
            className="px-4 py-2 bg-[#ebc8a0] hover:bg-[#fac57f] disabled:opacity-50"
          >
            -
          </button>

          <span className="px-4 py-1.5 text-lg bg-white min-w-13 text-center">
            {quantity}
          </span>

          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-[#ebc8a0] hover:bg-[#fac57f]"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
