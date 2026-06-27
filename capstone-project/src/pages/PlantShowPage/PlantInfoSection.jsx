import { PlantHeading } from "./PlantHeading";
import { BenifitBox } from "./BenifitBox";
import { PlantPurchaseOptions } from "./PlantPurchaseOptions";
import { useState } from "react";
import { getRandomIndex } from "shared-components/utils";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export const PlantInfoSection = ({ plant }) => {
  const [imageIndex, setImage] = useState(() => getRandomIndex(plant.images));
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bloc md:hidden mb-8">
        <PlantHeading plant={plant} />
      </div>
      <div className="flex flex-col flex-1">
        <Zoom>
          <img className="rounded-lg" src={plant.images[imageIndex].src} />
        </Zoom>
        <div className="flex mt-4">
          <BenifitBox
            icon="fa fa-check-circle"
            title="Guaranted Halthy"
            description="Guaranter to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenifitBox
            icon="fa-solid fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>

        <div className="text-slate-600 leading-relaxed mt-4">{plant.name}</div>
        <PlantPurchaseOptions
          plant={plant}
          imageIndex={imageIndex}
          setImage={setImage}
        />
      </div>
    </div>
  );
};
