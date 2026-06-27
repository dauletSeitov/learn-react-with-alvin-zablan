import { removeCartById } from "services/cart";

export const CartItem = ({ item, fetchCart }) => {
  return (
    <div className="flex">
      <img className="rounded-md w-28" src={item.image} />
      <div className="flex justify-between mx-4 flex-1">
        <div className="">
          <div className="text-xl text-emerald-700">{item.name}</div>
          <div className="text-slate-700 flex my-1">
            <div className="text-slate-400 w-14">color:</div>
            {item.color}
          </div>
          <div className="text-slate-700 flex my-1">
            <div className="text-slate-400 w-14">qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-slate-500 border">
            ${item.price * item.quantity}
          </div>
          <button
            className="text-sm text-slate-400 border border-red-500 hover:text-red-800"
            onClick={async () => {
              await removeCartById({ itemId: item.id });
              fetchCart();
            }}
          >
            <i className="fa-solid fa-trash mr-1 text-base"></i>remove
          </button>
        </div>
      </div>
    </div>
  );
};
