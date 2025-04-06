import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove, updateQuantity } from "../redux/Slices/cartSlice";
import { useState,useEffect } from "react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function incr() {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  }

  function decr() {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("🛒 Item removed from Cart", {
      position: "top-right",
      duration: 2000,
      style: { background: "#fff", color: "#333" },
    });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-300 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col gap-4">
      <div className="flex flex-row gap-5 not-md:flex-col not-md:justify-center not-md:items-center ">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-28 h-28 object-contain rounded-md"
        />

        <div className="max-w-fit">
          {/* Product Details */}
          <h1 className="text-lg font-bold text-gray-800 truncate">
            {isMobile
              ? item.title.split(" ").slice(0, 5).join(" ") + (item.title.split(" ").length > 5 ? "..." : "")
              : item.title}
          </h1>
          <p className="text-gray-600 text-sm line-clamp-2  not-md:hidden ">{item.description}</p>
          <p className="text-green-600 font-bold text-lg">${item.price.toFixed(2)}</p>

          <div className="flex flex-col md:flex-row justify-between mt-3 items-center md:items-start gap-3">
            {/* Quantity Control */}
            <div className="flex items-center gap-3 border rounded-md px-4 py-2 bg-gray-100">
              <button
                className="text-gray-700 font-bold text-xl hover:text-gray-900 transition-all px-2"
                onClick={decr}
              >
                -
              </button>

              <span className="text-gray-800 font-semibold text-lg">{item.quantity}</span>

              <button
                className="text-gray-700 font-bold text-xl hover:text-gray-900 transition-all px-2"
                onClick={incr}
              >
                +
              </button>
            </div>

            {/* Display Total Price */}
            <p className="text-green-600 font-bold text-lg">
              Total: ${(item.totalPrice).toFixed(2)}
            </p>

            {/* Delete Button */}
            <button
              onClick={removeFromCart}
              className="text-red-500 hover:text-red-700 transition-all flex items-center gap-2 bg-red-100 px-3 py-2 rounded-lg hover:bg-red-200"
            >
              <MdDelete className="text-xl" />
              <span className="text-sm font-medium">Remove</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
