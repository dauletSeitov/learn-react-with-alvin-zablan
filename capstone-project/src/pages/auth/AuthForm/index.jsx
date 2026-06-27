import { useState } from "react";
import { Field } from "./Field";

const AuthForm = ({ fields, submitButtonLabel, onSubmit }) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }

    return initialState;
  });

  const [isLoading, setIsLoading] = useState(false);

  const fieldItems = fields.map((f) => (
    <Field
      key={f.label}
      field={f}
      fieldValues={fieldValues}
      onChange={(e) => {
        setFieldValues({ ...fieldValues, [f.label]: e.target.value });
      }}
    />
  ));

  console.log("AuthForm.fieldValues", fieldValues);
  return (
    <form
      className="m-4 p-4 bg-white border border-slate-300 rounded-lg"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(fieldValues);
        setIsLoading(false);
      }}
    >
      {fieldItems}
      <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4 relative">
        {submitButtonLabel}
        {isLoading && (
          <div className="absolute top-0 right-6 flex items-center h-full ">
            <i className="fa-solid fa-slash text-green-300 text-xl animate-spin" />
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
