import { login } from "services/user";
import AuthForm from "./AuthForm";
import { FormContainer } from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import SessionContext from "context/SessionContext";
import { RedirectToPlantsIfSignedIn } from "shared-components/RedirectToPlantsIfSignedIn";

export const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700">{error}</div>
        {location.state?.accountCreated && (
          <div className="p-4 mt-2 mb-8 bg-green-200 border border-emerald-500 rounded-lg text-emerald-700">
            Account created successfully. Please sign in.
          </div>
        )}
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
          ]}
          submitButtonLabel="sing in"
          onSubmit={async (values) => {
            const response = await login({
              username: values.username,
              password: values.password,
            });
            const data = await response.json();
            if (response.status === 200) {
              setError("");
              sessionContext.signIn(data.token);
            } else {
              setError(data.error);
            }
          }}
        />
        <Link to="/sign-up" className="text-sm text-green-600 underline">
          create an account
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};
