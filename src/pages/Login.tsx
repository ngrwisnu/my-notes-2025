import { Link } from "react-router";
import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import AuthPageLayout from "../layouts/AuthPageLayout";
import FormItem from "../components/form/FormItem";
import useInput from "../hooks/useInput";
import { FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
  };

  return (
    <AuthPageLayout>
      <h1 className="mt-6 text-center text-4xl font-semibold">Login</h1>
      <form
        onSubmit={submitHandler}
        className="mt-4 flex flex-col gap-4 px-5 pb-6"
        action=""
      >
        <FormItem>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={setEmail}
            placeholder="example@email.com"
            className="bg-slate-100"
            required
          />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={setPassword}
            className="bg-slate-100"
            required
          />
        </FormItem>
        <button
          type="submit"
          className="ml-auto mt-6 flex w-full items-center justify-center gap-1 rounded-lg bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
      <div className="px-5">
        Doesn't have an account?{" "}
        <Link
          className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
          to="/signup"
        >
          Register here
        </Link>
      </div>
    </AuthPageLayout>
  );
};

export default Login;
