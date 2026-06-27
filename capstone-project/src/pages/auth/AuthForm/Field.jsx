export const Field = ({ field, fieldValues, onChange }) => {
  return (
    <div key={field.label} className="flex flex-col my-4">
      <label htmlFor={field.label} className="pl-1 text-slate-500">
        {field.label}
      </label>
      <input
        id={field.label}
        type={field.type}
        value={fieldValues[field.label]}
        onChange={onChange}
        className="px-2 py-1 w-64 bg-slate-50 border border-slate-300 rounded-lg focus:outline-emerald-600"
      ></input>
    </div>
  );
};
