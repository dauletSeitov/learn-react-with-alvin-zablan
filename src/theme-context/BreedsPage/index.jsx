
import { useState, useEffect } from "react";
import clsx from "clsx";
import { NavBar } from "../NavBar";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

import BreedItem from "./BreedsItem";
const initialBreeds = [
  {
    name: "Dog Years",
    image_source: "https://pettownsendvet.com/wp-content/uploads/2023/01/iStock-1052880600-1024x683.jpg",
    description: "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the gray wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture. Due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet that would be inadequate for other canids."
  }
]
const SPINNER_STYLE = {
  cyan: 'text-cyan-500',
  rose: 'text-rose-500',
  yellow: 'text-yellow-500'
};

const BreedSPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { themeColor, setThemeColor } = useContext(ThemeContext)

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setBreeds(initialBreeds);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <NavBar themeColor={themeColor} setThemeColor={setThemeColor} />
      <div className="flex justify-center font-pt-sans">
        <div className="flex flex-col items-center w-full max-w-4xl px-2 my-24">
          {isLoading ? (
            <i className={clsx("fad fa-spinner-third animate-spin text-4xl my-20", SPINNER_STYLE[themeColor])}></i>
          ) : (breeds.map((breed, idx) => <BreedItem key={idx} breed={breed} themeColor={themeColor} />))
          }
        </div>
      </div>
    </>
  );
};

export default BreedSPage;