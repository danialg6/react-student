import React, { useEffect, useState, useContext } from "react";
import { Context as StudentContext } from "../context/StudentContext";

const Header = () => {
  const { state } = useContext(StudentContext);
  return <div>{state.fullname}</div>;
};

export default Header;
