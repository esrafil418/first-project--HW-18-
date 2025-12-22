type CartItemProps = {
  name: string;
  price: number;
  quantitiy: number;
};

export default function CartItem({ name, price, quantitiy }: CartItemProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p>${price.toFixed(1)}</p>
      </div>
      <div className="text-lg">
        Qty: <span className="font-bold">{quantitiy}</span>
      </div>
    </div>
  );
}
