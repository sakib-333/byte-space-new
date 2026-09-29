import { Outlet } from "react-router-dom"
import AuthHeader from "./AuthHeader"

const AuthLayout = () => {
  return (
     <div>
        <AuthHeader />

        <main className="w-full min-h-screen">
            <Outlet />
        </main>
    </div>
  )
}

export default AuthLayout