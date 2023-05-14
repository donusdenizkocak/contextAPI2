import { createContext } from "react";

//! 1)Creating Context
export const LoginContext = createContext()

//! 2) Provider

import React from 'react'

export const LoginProvider = () => {
  return (
    <div>LoginProvider</div>
  )
}
