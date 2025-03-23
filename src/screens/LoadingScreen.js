import React, { useContext, useEffect, useState } from "react";

// Contexts
import { Context as AuthContext } from "../contexts/AuthContext";

const LoadingScreen = () => {
  const { checkToken } = useContext(AuthContext);

  useEffect(() => {
    checkToken();
  }, []);

  return null;
};

export default LoadingScreen;
