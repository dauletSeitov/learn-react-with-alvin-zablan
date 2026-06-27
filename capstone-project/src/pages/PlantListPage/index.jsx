import { RedirectToSignInIfSignedOut } from "shared-components/RedirectToSignInIfSignedOut";
import { NavBar } from "shared-components/NavBar";
import { getPlants } from "services/plant";
import { useEffect, useState } from "react";
import { PlantItem } from "./PlantItem";
import { LoadingSpinner } from "shared-components/LoadingSpinner";
import { motion } from "framer-motion";

export const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    setIsLoading(true);
    const response = await getPlants();
    const data = await response.json();
    setPlants(data);
    setIsLoading(false);
  };

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl border border-red-900">
              <div className="text-4xl text-emerald-800 mb-6 px-4">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, translateY: "20px" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.2, duration: 0.4 }}
                  >
                    <PlantItem plant={p} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};
