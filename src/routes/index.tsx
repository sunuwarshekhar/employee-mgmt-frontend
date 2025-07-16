import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => {
    return "Hello World";
  },
  component: Main,
});

function Main() {
  console.log("hello");
  return (
    <div
      style={{
        backgroundImage: `url('/images/login_bg.jpg')`,
      }}
      className="bg-center bg-no-repeat bg-cover h-screen w-screen"
    >
      {/* <div className="h-full">
        <div className="shadow-lg border border-base-100 rounded-lg p-6 max-w-sm w-full bg-white">
          <div className="font-bold text-center text-title-large mb-6 text-primary">
            Sign In
          </div>
          <form>
            <div>
              <TextField
                label="Email Address"
                id="email"
                // value={values.email}
                // onChange={handleChange}
                // error={touched.email ? errors.email : undefined}
                // onBlur={handleBlur}
                // disabled={isSigningIn}
                autoComplete="email"
              />
              <TextField
                label="Password"
                id="password"
                // value={values.password}
                // onChange={handleChange}
                // error={touched.password ? errors.password : undefined}
                // onBlur={handleBlur}
                // disabled={isSigningIn}
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full"
              //   leadingIcon={<LogInIcon />}
              //   isLoading={isSigningIn}
              //   disabled={!isValid}
            >
              Sign In
            </button>
          </form>
          <div className="mt-5 text-xs text-primary font-light text-center">
            Holy Himalaya, Thamel, Kathmandu
          </div>
        </div>
      </div> */}
    </div>
  );
}
