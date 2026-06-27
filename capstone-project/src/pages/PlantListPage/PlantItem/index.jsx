import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import {POT_COLORS} from "shared-components/utils"
import { getRandomIndex } from "shared-components/utils";

export const PlantItem = ({ plant }) => {
  const [imageIndex, setImageIndex] = useState(() =>
    getRandomIndex(plant.images)
  );

  return (
    <div className="mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img
          className="w-[280px] h-[280px] rounded-md"
          src={plant.images[imageIndex].src}
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl text-emerald-700">{plant.name}</div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIndex].color}
        </div>
        <div className="flex">
          {plant.images.map((image, key) => (
            <div
              onMouseEnter={() => setImageIndex(key)}
              key={key}
              className={clsx(
                "rounded-full w-5 h-5 mx-1 border border-slate-300",
                POT_COLORS[image.color],
                key === imageIndex &&
                  "outline outline-slate-400 outline-offset-2"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
