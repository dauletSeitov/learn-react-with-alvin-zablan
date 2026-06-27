import { useState } from "react";
import AuthForm from "./AuthForm";
import { FormContainer } from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "services/user";
import { RedirectToPlantsIfSignedIn } from "shared-components/RedirectToPlantsIfSignedIn";

export const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700">{error}</div>
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "password",
            },
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          onSubmit={async (values) => {
            if (values.username.length < 4) {
              setError("usename too short");
              return;
            }
            if (values.password.length < 4) {
              setError("password too short");
              return;
            }
            if (values.password !== values["confirm password"]) {
              setError("passwords do not match");
              return;
            }
            const response = await createUser({
              username: values.username,
              password: values.password,
            });

            if (response.status === 201) {
              navigate("/", {
                state: {
                  accountCreated: true,
                },
              });
              setError("");
            } else {
              const data = await response.json();
              console.log("data", data);
              setError(data.error);
            }
          }}
          submitButtonLabel="create account"
        />
        <Link to="/" className="text-sm text-green-600 underline">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};
