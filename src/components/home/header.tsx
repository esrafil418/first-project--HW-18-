export default function Header() {
  return (
    <>
      <header className="flex flex-col gap-5 p-2 justify-center items-center">
        <div className="flex gap-3 justify-center items-center">
          <div>
            <img
              className="h-15 w-15 object-cover"
              src="/src/assets/logo/logo.png"
              alt="starbucks-logo"
            />
          </div>
          <div className="text-3xl lg:text-4xl xl:text-5xl font-bold starbucks">
            Starbucks
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Starbucks Online Coffee Order</div>
        </div>
      </header>
    </>
  );
}
