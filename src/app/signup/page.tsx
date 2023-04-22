//renders code in client instead of Server
"use client";

import React, { useCallback } from "react";
import signUp from "../../firebase/auth/signup";
import { useRouter } from "next/navigation";

//skiqcp: JS-D1001
function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleClickEmail = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );
  const handleClickPassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleForm = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const { error } = await signUp(email, password);

    if (error) {
      return console.error(error);
    }

    return router.push("/admin");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={handleClickEmail}
              required
              type="email"
              name="email"
              id="email"
              placeholder="examplo@email.com"
            />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input
              onChange={handleClickPassword}
              required
              type="password"
              name="password"
              id="password"
              placeholder="senha"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
