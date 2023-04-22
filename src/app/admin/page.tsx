"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import Router from "next/router";
import { User } from "firebase/auth";

//skiqcp: JS-D1001
function Page() {
  const { user } = useAuthContext() as { user: User };

  useEffect(() => {
    if (user === null) Router.push("/login");
  }, [user]);

  return <h1>LogIn to see this page</h1>;
}

export default Page;
