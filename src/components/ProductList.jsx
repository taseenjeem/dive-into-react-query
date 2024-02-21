const ProductList = ({ productData }) => {
  const { name, picture, price, storage, color, display, camera, battery } =
    productData;

  return (
    <>
      <div className="mx-auto px-5">
        <div className="max-w-lg cursor-pointer rounded-lg bg-slate-200 p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={picture}
            alt="product"
          />
          <div className="flex justify-center flex-wrap gap-7">
            <div className="my-4">
              <p className="font-bold text-gray-800">Product Name</p>
              <p className="font-semibold text-gray-500">{name}</p>
            </div>
            <div className="my-4">
              <p className="font-bold text-gray-800">Storage</p>
              <p className="font-semibold text-gray-500">{storage}</p>
            </div>
            <div className="my-4">
              <p className="font-bold text-gray-800">Color</p>
              <p className="font-semibold text-gray-500">{color}</p>
            </div>
            <div className="my-4">
              <p className="font-bold text-gray-800">Display</p>
              <p className="font-semibold text-gray-500">{display}</p>
            </div>
            <div className="my-4">
              <p className="font-bold text-gray-800">Camera</p>
              <p className="font-semibold text-gray-500">{camera}</p>
            </div>
            <div className="my-4">
              <p className="font-bold text-gray-800">Battery</p>
              <p className="font-semibold text-gray-500">{battery}</p>
            </div>
            <div className="my-4">
              <p className="font-bold text-gray-800">Price</p>
              <p className="font-semibold text-gray-500">$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
