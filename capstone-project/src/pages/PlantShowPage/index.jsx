import { useEffect, useState } from "react";
import { getPlantById } from "services/plant";
import { NavBar } from "shared-components/NavBar";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "shared-components/LoadingSpinner";
import { PlantInfoSection } from "./PlantInfoSection";

export const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();
  useEffect(() => {
    fetchPlant(plantId);
  }, [plantId]);

  const fetchPlant = async (id) => {
    setIsLoading(true);
    const response = await getPlantById({ id });
    const data = await response.json();
    setPlant(data);
    setIsLoading(false);
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-green-50 min-h-screen">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </>
  );
};
