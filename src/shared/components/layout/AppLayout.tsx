import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
        <h1>Header</h1>

        <main>
            <Outlet />
        </main>
        <h1>Footer</h1>
    </div>
  )
}

export default AppLayout