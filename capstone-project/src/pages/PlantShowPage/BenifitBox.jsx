import clsx from "clsx";

export const BenifitBox = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center px-2 py-4 flex-1">
      <i className={clsx("text-emerald-700 text-3xl", icon)}></i>
      <div className="text-slate-700 ">{title}</div>
      <div className="text-slate-500 text-sm text-center">{description}</div>
    </div>
  );
};
