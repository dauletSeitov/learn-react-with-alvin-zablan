import clsx from "clsx";
import { useState } from "react";
import { addToCart } from "services/cart";
import { LoadingSpinner } from "shared-components/LoadingSpinner";
import { POT_COLORS } from "shared-components/utils";

export const PlantPurchaseOptions = ({ plant, imageIndex, setImage }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="my-10">
        <div className="flex text-emerald-700">
          <i className="mr-2 text-2xl fa-solid fa-brush"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4">
          {plant.images.map((img, index) => (
            <div
              key={img.color}
              className="flex flex-col items-center mx-2"
              onMouseEnter={() => setImage(index)}
            >
              <div
                className={clsx(
                  "rounded-full w-10 h-10",
                  POT_COLORS[img.color],
                  imageIndex === index &&
                    "outline outline-offset-2 ouline-slate-500"
                )}
              ></div>

              <div
                className={clsx(
                  "mt-1",
                  imageIndex === index ? "text-slate-700" : "text-slate-500"
                )}
              >
                {img.color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="rounded-full flex items-center text-slate-500 border-2 border-slate-300 px-4 py-3">
          <button
            className="text-xl"
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </button>
          <div className="mx-4 text-emerald-700">{quantity}</div>
          <button
            className="text-xl"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          className="rounded-full bg-emerald-700 text-white text-xl flex justify-center items-center flex-1 ml-2 hover:bg-emerald-800"
          onClick={async () => {
            setIsLoading(true);
            const response = await addToCart({
              plantId: plant.id,
              quantity: quantity,
              color: plant.images[imageIndex].color,
            });
            setIsLoading(false);

            console.log(response.status);
          }}
        >
          {isLoading ? (
            <i className="fa-solid fa-circle-notch text-2xl animate-spin mr-1" />
          ) : (
            <i className="fa-solid  fa-cart-plus text-2xl mr-1" />
          )}
          add to cart
        </button>
      </div>
    </>
  );
};
