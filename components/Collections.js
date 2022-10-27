const Collections = () => {
  return (
    <div className="w-full h-auto mt-14 text-center">
      <h2 className="font-semibold text-4xl font-Narrow text-[#0b0a18] tracking-wider">
        Koleksiyonumuz
      </h2>
      <div className="w-full flex h-[70vh] justify-between mt-14">
        <div className="h-full w-full bg-contain bg-center bg-no-repeat bg-[url('/categories/women.jpg')] relative">
          <button className="bg-white px-7 bg-opacity-60 hover:bg-opacity-100 py-2  rounded-md font-medium text-lg absolute left-1/2 top-[80%] translate-x-[-50%]">
            Kadın
          </button>
        </div>
        <div className="h-full w-full bg-contain bg-center bg-no-repeat bg-[url('/categories/men.jpg')] relative">
          <button className="bg-white px-7 bg-opacity-60 hover:bg-opacity-100 py-2  rounded-md font-medium text-lg absolute left-1/2 top-[80%] translate-x-[-50%]">
            Erkek
          </button>
        </div>
        <div className="h-full w-full bg-contain bg-center bg-no-repeat bg-[url('/categories/kids.jpg')] relative">
          <button className="bg-white px-7 bg-opacity-60 hover:bg-opacity-100 py-2  rounded-md font-medium text-lg absolute left-1/2 top-[80%] translate-x-[-50%]">
            Çocuk
          </button>
        </div>
      </div>
    </div>
  );
};
export default Collections;