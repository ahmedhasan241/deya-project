"use client";
import React from "react";
import { useAuthActions } from "../_api/actions";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { useAdminStore } from "@/store/adminStore";
import PasswordInput from "@/app/[locale]/_comps/ui/passwordInput";

const LoginForm = () => {
  const { login, loginLoading } = useAuthActions();
  const { setToken, setIsLogin, isLogin, token, setUser } = useAdminStore();
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      user_name: e.target.elements.user_name.value,
      password: e.target.elements.password.value,
    }).then((response) => {
      setToken(response?.data?.data?.token);
      setIsLogin(true);
      Cookies.set("token", response?.data?.token);
      setUser(response?.data?.data);
      push("/en/home");
    });
  };

  return (
    <div
      style={{ background: "black" }}
      className="!bg-black flex justify-center align-middle h-screen items-center dark:text-base-content w-full"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-11/12 md:w-3/6 lg:w-1/4 bg-black/5 rounded-3xl p-10"
      >
        {/* <div className="flex flex-col items-center gap-6">
          <div className="flex text-primary items-center gap-2 text-lg">
            <img src="/logo.png" alt="logo grand" />
            <span className="uppercase">grand community</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-semibold ">Welcome Back!</h4>
            <p className="text-xs">Enter your email and password to log in</p>
          </div>
        </div> */}
        <div>
          <div className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Email or username</span>
            </div>

            <label
              className="input input-bordered flex items-center gap-2"
              htmlFor="user_name"
            >
              <MdEmail size={18} />
              <input
                type="text"
                id="text"
                name="user_name"
                placeholder="Email or username"
                className="grow"
              />
            </label>
          </div>

          <PasswordInput
            label="Password"
            className="grow"
            placeholder="Enter your password"
            id="password"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary text-white w-full"
          disabled={loginLoading}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
