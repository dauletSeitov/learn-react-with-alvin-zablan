export const FeatureItem = ({ feature }) => {
  return (
    <div className="w-[260px] mx-4 my-6">
      <img src={feature.imageUrl} className="w-[120px]"/>
      <div className="text-violet-900 text-xl my-2">{feature.name}</div>
      <div className="text-slate-600 ">{feature.location}</div>
    </div>
  );
};
