import { FC } from "react"

import { HeaderProps } from "./Header.interfaces"

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="border-b-[1px] bg-white flex-grid justify-between items-center py-2 px-4">
      Header Works!
    </header>
  )
}
