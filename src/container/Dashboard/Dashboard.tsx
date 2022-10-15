import { FC } from "react"

import { DashboardProps } from "./Dashboard.interface"

export const Dashboard: FC<DashboardProps> = (props) => {
  const { className } = props

  return <div className={className}>Dashboard Works!</div>
}
