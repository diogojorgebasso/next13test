'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "context/AuthContext";
import Router from "next/router";
import { User } from "firebase/auth";

function Page() {
  const { user } = useAuthContext() as { user: User }

  useEffect(() => {
    if (user == null) Router.push("/")
  }, [user])

  return (<h1>Only logged in users can view this page</h1>);
}

export default Page;
