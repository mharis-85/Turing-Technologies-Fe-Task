import { FC } from "react"
import { Link } from "react-router-dom"
import { URL_DASHBOARD } from "../../router/routes"

import { HeaderProps } from "./Header.interfaces"

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="border-b-2 bg-white flex flex-wrap justify-between items-center py-4 px-4">
      <Link to={URL_DASHBOARD}>
        <img src="/Logo.png" alt="logo" className="h-auto w-full max-h-6" />
      </Link>
    </header>
  )
}
