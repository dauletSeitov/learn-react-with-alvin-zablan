import SessionContext from "context/SessionContext";
import { useContext, useEffect, useState, useCallback } from "react";
import { getCart } from "services/cart";
import { LoadingSpinner } from "shared-components/LoadingSpinner";
import { CartItem } from "./CartItem";
import clsx from "clsx";
import { motion } from "framer-motion";

export const CartModal = () => {
  const { username } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await getCart();
    const data = await response.json();

    console.log("data", data);
    setItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let totalPrice = 0;

  for (let item of items) {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  }

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen max-w-xl bg-white flex flex-col"
    >
      <div className="bg-emerald-800 shadow-lg text-white text-3xl text-center py-7">
        {username}'s Cart
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-1 overflow-y-scroll pb-20">
            {items.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "mx-5 mt-8 pt-8",
                  index === 0 ? "" : "border-t border-slate-200"
                )}
              >
                <CartItem item={item} key={index} fetchCart={fetchCart} />
              </div>
            ))}
          </div>
          <div className="flex flex-col px-4 border-t border-slate-200 pb-4">
            <div className="flex justify-between py-4 text-slate-400">
              <div>{totalQuantity} items</div>
              <div>
                subtotal
                <span className="ml-2 text-lg text-slate-500">
                  ${totalPrice}
                </span>
              </div>
            </div>

            <button className="bg-emerald-700 rounded-full flex justify-center py-3 text-lg text-white items-center">
              checkout
              <i class="fa-solid fa-arrow-right text-2xl ml-2"></i>
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};
