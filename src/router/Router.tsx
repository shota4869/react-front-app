import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Usermanagement } from "../components/pages/Usermanagement";
import { Page404 } from "../components/pages/Page404";
import { Layout } from "../components/pages/Layout";
import { RegistUser } from "../components/pages/RegistUser";
import { CalenderPage } from "../components/pages/CalenderPage";
import { BalanceOfPayment } from "../components/pages/BlanceOfPayment";

export const Router: VFC = memo(() => {

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="regist-user" element={<RegistUser />} />
            <Route path="home" element={<Home />} />
            <Route path="calender" element={<CalenderPage />} />
            <Route path="balance-list" element={<BalanceOfPayment />} />
            <Route path="transition" element={<Usermanagement />} />
            <Route path="/*" element={<Page404 />} />
        </Routes>
    )
})