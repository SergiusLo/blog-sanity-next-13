function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-10 mb-10">
      <div>
        <h1 className="text-7xl mb-5 ">Blog about Plants</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every plants lovers
          </span>{" "}
          favorite blog in the Plant
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        About plants | Flowers | Tree and other
      </p>
    </div>
  );
}

export default Banner;
