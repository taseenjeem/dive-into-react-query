import axios from "axios";
import ProductList from "../components/ProductList";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchingProductData = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

const LandingPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchingProductData,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h3 className="text-4xl font-bold italic">Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h3 className="text-4xl font-bold italic text-red-500">
          An Error Occurred. Error message : {error.message}
        </h3>
      </div>
    );
  }

  return (
    <>
      <div className="mb-20">
        <div className="my-5 flex justify-center items-center gap-10">
          <h1 className="text-center text-2xl font-bold">Product List</h1>
          <Link
            to={`/add-new-product`}
            className="bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-500 duration-200"
          >
            Add New Product
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 space-y-10">
          {data?.map((item) => (
            <ProductList key={item.id} productData={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
