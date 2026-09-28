import { Outlet } from "react-router-dom"
import Header from "./Header"

const AppLayout = () => {
  return (
    <div>
        <Header />

        <main className="w-full min-h-screen">
            <Outlet />
        </main>
        <h1>Footer</h1>
    </div>
  )
}

export default AppLayout