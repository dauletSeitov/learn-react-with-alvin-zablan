export const FormContainer = ({ children }) => {
  return (
    <div className="flex">
      <div className="relative md:flex hidden">
        <img
          src="https://d1d9816gvj4fau.cloudfront.net/capstone_sign_in_scene.png"
          className="h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-green-50 flex-1">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            src="https://d1d9816gvj4fau.cloudfront.net/capstone_logo_dark.png"
            className="w-16 mb-2"
          />
          <div className="text-3xl text-emerald-700">Rica's Plants</div>
        </div>
        {children}
      </div>
    </div>
  );
};
