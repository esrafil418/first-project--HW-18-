type TotalProps = {
  amount: number;
};

export default function Total({ amount }: TotalProps) {
  return (
    <div className="text-center text-2xl font-semibold mt-5">
      <span>Total:</span>
      <span>${amount.toFixed(2)}</span>
    </div>
  );
}
