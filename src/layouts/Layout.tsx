import React from "react"
import { matchRoutes, Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../redux/store/hooks"
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
  URL_DASHBOARD,
  URL_LOGIN,
} from "../router/routes"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LayoutProps } from "./Layout.interfaces"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation()

  const token = useAppSelector((store) => store.auth.accessToken)
  const isAuthenticated = !!token

  const authenticated_route = !!matchRoutes(AUTHENTICATED_ROUTES, pathname)?.length
  const unauthenticated_route = !!matchRoutes(UNAUTHENTICATED_ROUTES, pathname)?.length

  const fullPage = false

  if (!isAuthenticated && authenticated_route) return <Navigate to={URL_LOGIN} />
  if (isAuthenticated && unauthenticated_route) return <Navigate to={URL_DASHBOARD} replace />

  return (
    <div className="flex flex-col justify-between h-full min-h-screen bg-body">
      {!fullPage && <Header />}
      {children(isAuthenticated)}
      {!fullPage && <Footer />}
    </div>
  )
}
