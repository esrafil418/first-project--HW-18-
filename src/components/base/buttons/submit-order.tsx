type SubmitOrderProps = {
  onClick: () => void;
};

export default function SubmitOrder({ onClick }: SubmitOrderProps) {
  return (
    <button
      onClick={onClick}
      className="w-[90%] block mx-auto py-3 bg-gray-600 text-white text-lg font-semibold mt-6 mb-2 rounded-md"
    >
      Submit Order
    </button>
  );
}
