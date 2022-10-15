import { FC } from "react"

import { SignupProps } from "./Signup.interfaces"

export const Signup: FC<SignupProps> = (props) => {
  const { className } = props

  return <div className={className}>Signup Works!</div>
}
