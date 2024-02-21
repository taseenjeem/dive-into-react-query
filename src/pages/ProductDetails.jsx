import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchingEachProductData = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = () => {
  const params = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", params.id],
    queryFn: fetchingEachProductData,
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
      <img className="w-2/5 mx-auto" src={data?.picture} alt="" />
    </>
  );
};

export default ProductDetails;
