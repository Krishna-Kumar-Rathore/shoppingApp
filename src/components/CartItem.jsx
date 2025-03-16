import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast'; // ✅ Ensure correct import
import { remove } from '../redux/Slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('🛒 Item removed from Cart', {
      position: 'top-right',
      duration: 2000,
      style: { background: '#fff', color: '#333' }, // Optional: Custom styling
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img src={item.image} alt={item.title} className="w-24 h-24 object-contain rounded-md" />
        </div>

        {/* Product Details */}
        <div className="col-span-2 space-y-2">
          <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
          <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
          <p className="text-green-600 font-bold">${item.price}</p>
        </div>
      </div>

      {/* Delete Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={removeFromCart}
          className="text-red-500 hover:text-red-700 transition-all flex items-center gap-1"
        >
          <MdDelete className="text-xl" />
          <span className="text-sm font-medium">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
