import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { SucessPage } from "./pages/SucessPage"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/sucessPage" element={<SucessPage />} />
            </Route>
        </Routes>
    )
}