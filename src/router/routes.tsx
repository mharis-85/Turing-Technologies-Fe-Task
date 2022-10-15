import { RouteObject } from "react-router-dom"
import { Dashboard } from "../container/Dashboard"
import { NotFound } from "../container/NotFound"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"

export interface RoutePram extends Record<string, string | undefined> {}

export function generateRoute(url: string, prams: RoutePram = {}) {
  return Object.entries(prams).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, value ?? ""),
    url
  )
}

export interface Route extends RouteObject {
  name?: string
  children?: Route[]
  icon?: JSX.Element
}

// Basic Routes

export const URL_DASHBOARD = "/"
export const URL_LOGIN = "/login"
export const URL_SIGNUP = "/signup"

export const OPEN_ROUTES: Route[] = [
  {
    path: "*",
    element: <NotFound />,
  },
]

export const AUTHENTICATED_ROUTES: Route[] = [
  {
    path: URL_DASHBOARD,
    element: <Dashboard />,
  },
]

export const UNAUTHENTICATED_ROUTES: Route[] = [
  {
    path: URL_LOGIN,
    element: <Login />,
  },
  {
    path: URL_SIGNUP,
    element: <Signup />,
  },
]
