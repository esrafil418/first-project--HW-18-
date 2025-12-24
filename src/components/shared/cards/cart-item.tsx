type CartItemProps = {
  name: string;
  price: number;
  quantity: number; 
};

export default function CartItem({ name, price, quantity }: CartItemProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p>${price.toFixed(2)}</p> 
      </div>
      <div className="text-lg">
        Qty: <span className="font-bold">{quantity}</span>
      </div>
    </div>
  );
}