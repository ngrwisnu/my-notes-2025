import { Link } from "react-router";
import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import AuthPageLayout from "../layouts/AuthPageLayout";
import FormItem from "../components/form/FormItem";
import useInput from "../hooks/useInput";
import { FormEvent } from "react";

const SignUp = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(data);
  };

  return (
    <AuthPageLayout>
      <h1 className="mt-6 text-center text-4xl font-semibold">
        Start your journey here
      </h1>
      <form
        onSubmit={submitHandler}
        className="mt-4 flex flex-col gap-4 px-5 pb-6"
        action=""
      >
        <FormItem>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={setName}
            placeholder="John Doe"
            className="bg-slate-100"
            required
          />
        </FormItem>
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
        <FormItem>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormInput
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={setConfirmPassword}
            className="bg-slate-100"
            required
          />
        </FormItem>
        <button
          type="submit"
          className="ml-auto mt-6 flex w-full items-center justify-center gap-1 rounded bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
        >
          Sign up
        </button>
      </form>
      <div className="px-5">
        Already have an account?{" "}
        <Link className="text-indigo-600 hover:text-indigo-700" to="/login">
          Login here
        </Link>
      </div>
    </AuthPageLayout>
  );
};

export default SignUp;
