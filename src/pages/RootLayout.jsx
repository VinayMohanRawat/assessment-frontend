import { Outlet } from "react-router-dom"

export default function RootLayout() {

    return <>
        <h1 className="text-3xl text-purple-100 text-center">Assessment Task </h1>
        <main>
            <Outlet />
        </main>
    </>
}