import axios from "axios";
import ProductList from "../components/ProductList";
import { useQuery } from "@tanstack/react-query";

const fetchingProductData = async () => {
  const response = await axios.get(`http://localhost:3000/products`);
  return response.data;
};

const LandingPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
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
        <div className="my-5">
          <h1 className="text-center text-2xl font-bold">Product List</h1>
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
