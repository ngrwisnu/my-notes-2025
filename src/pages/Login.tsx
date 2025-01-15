import { Link } from "react-router";
import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 lg:px-0">
      <div className="w-full max-w-[480px] rounded-lg pb-6 shadow-lg">
        <div className="flex items-center justify-center bg-slate-100 py-5">
          <div className="h-full">
            <img
              src="/myNotes-dark.png"
              className="h-[80px]"
              alt="myNotes logo"
            />
          </div>
        </div>
        <h1 className="mt-6 text-center text-4xl font-semibold">Login</h1>
        <form className="mt-4 flex flex-col gap-4 px-5 pb-6" action="">
          <div className="flex flex-col gap-1">
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className="bg-slate-200"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              id="password"
              className="bg-slate-200"
              required
            />
          </div>
          <button
            type="submit"
            className="ml-auto mt-6 flex w-full items-center justify-center gap-1 rounded bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <div className="px-5">
          Doesn't have an account?{" "}
          <Link className="text-indigo-600 hover:text-indigo-700" to="/signup">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
