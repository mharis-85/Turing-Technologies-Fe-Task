import { FC } from "react"

import { LoginProps } from "./Login.interfaces"

export const Login: FC<LoginProps> = (props) => {
  const { className } = props

  return <div className={className}>Login Works!</div>
}
