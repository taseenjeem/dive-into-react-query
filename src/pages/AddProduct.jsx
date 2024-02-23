import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id: crypto.randomUUID().toString(),
    name: "",
    picture: "",
    price: 0,
    storage: "",
    color: "",
    display: "",
    camera: "",
    battery: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (newProduct) =>
      axios.post(`http://localhost:3000/products`, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h3 className="text-4xl font-bold italic">Loading...</h3>
      </div>
    );
  }

  if (isSuccess) {
    alert("Product Added successfully");
    navigate("/");
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(inputValue);
    e.target.reset();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="max-w-lg w-full space-y-4">
          <span className="flex flex-col">
            <label htmlFor="">Product Name</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="name"
              value={inputValue.name}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Thumbnail URL</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="picture"
              value={inputValue.picture}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Price</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="price"
              value={inputValue.price}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Storage</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="storage"
              value={inputValue.storage}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Color</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="color"
              value={inputValue.color}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Display</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="display"
              value={inputValue.display}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Camera</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="camera"
              value={inputValue.camera}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Product Battery</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-lg"
              type="text"
              name="battery"
              value={inputValue.battery}
              onChange={handleChange}
              required
            />
          </span>
          <button
            type="submit"
            className="bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-500 duration-200 w-full"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
