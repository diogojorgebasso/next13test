//renders code in client instead of Server
"use client";

import React, { useCallback } from "react";
import signIn from "../../firebase/auth/signin";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  /**
   * Function conform JS-0417
   * @param e The event in the Input Field
   */
  const handleClickEmail = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );
  /**
   * Function conform JS-0417
   * @param e The event in the Input Field
   */
  const handleClickPassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  /**
   * Function to signIn the user
   * @param event The event after ths submit button
   */
  const handleForm = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      return console.error(error);
    }

    return router.push("/admin");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Login</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={handleClickEmail}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
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
              placeholder="password"
            />
          </label>
          <button type="submit">Preenchi</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
