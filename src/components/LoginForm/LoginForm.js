"use client";

import { userSchema } from "@/utils/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SocialLogin from "../shared/SocialLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => data;
  return (
    <div className="w-full flex-1">
      <h2 className="text-center font-medium text-black text-3xl">
        Login To Your Account{" "}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col items-center space-y-3"
      >
        {/*  */}
        <div className="max-w-[407px]  w-full">
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.email && "input-error"
            }`}
          />
          <div className="label">
            <span className="label-text-alt text-red-700 ${errors?.email}">
              {errors?.email?.message}
            </span>
          </div>
        </div>
        {/*  */}

        <div className="max-w-[407px] w-full">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.password && "input-error"
            }`}
          />
          <div className="label">
            <span className="text-xs label-text-alt text-red-700">
              {errors?.password?.message}
            </span>
          </div>
          <span className="label-text-alt link link-hover">
            Forget Password?
          </span>
        </div>

        <div className="max-w-[407px] w-full text-left pl-1 mb-3"></div>

        <button
          type="submit"
          className="btn btn-neutral max-w-[407px] w-full rounded-lg h-11 font-medium text-base"
        >
          Login
        </button>
        <div className="max-w-[407px] w-full">
          <p className="text-color-gray1">
            Don&apos;t have an account?{" "}
            <Link
              className="text-cyan-600 hover:text-cyan-700"
              href={"/register"}
            >
              register
            </Link>
          </p>
        </div>
        <div className="divider max-w-[407px] w-full mx-auto">OR</div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default LoginForm;
