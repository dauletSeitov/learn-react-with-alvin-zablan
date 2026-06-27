import { FeatureItem } from "./FeatureItem";

const features = [
  {
    name: "Tommy",
    age: 5,
    breed: "Bulldog",
    location: "New York",
    imageUrl: "https://moremotoracing.com/img/cms/BANNER%20OFFLINE%20(1).png",
  },
  {
    name: "Rex",
    age: 3,
    breed: "German Shepherd",
    location: "Chicago",
    imageUrl:
      "https://www.ovexscooter.com/2539-large_default/ovex-x-rider-xl-moto-cross.jpg",
  },
  {
    name: "Bella",
    age: 2,
    breed: "Labrador",
    location: "Los Angeles",
    imageUrl:
      "https://pitbikeimr.com/2518-thickbox_default/mir-racing-moto-5-2023.jpg",
  },
  {
    name: "Milo",
    age: 4,
    breed: "Beagle",
    location: "San Francisco",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ_sowCh1WjwSotkRvqYzBBmxq7aqYAZIOw&s",
  },
  {
    name: "Charlie",
    age: 1,
    breed: "Poodle",
    location: "Seattle",
    imageUrl:
      "https://img2.storyblok.com/620x0/smart/f/176629/7314x4876/31c2ff1077/cfmoto-hero-image-mt-touring-both-03.jpg",
  },
];
const FeatureSection = () => {
  const featureItems = features.map((f, i) => 
    <FeatureItem key={i} feature={f} />
  );
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl flex-col items-center px-4">
        <div className="text-3xl text-violet-900 text-center">
          Proudly Disapinting Users, Since 2016
        </div>
        <div className="flex flex-wrap justify-center py-16">{featureItems}</div>
      </div>
    </div>
  );
};

export default FeatureSection;
