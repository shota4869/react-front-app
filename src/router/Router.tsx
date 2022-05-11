import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { EditAmount } from "../components/pages/EditAmount";
import { Usermanagement } from "../components/pages/Usermanagement";
import { Page404 } from "../components/pages/Page404";
import { Layout } from "../components/pages/Layout";
import { RegistUser } from "../components/pages/RegistUser";
import { BalanceOfPaymentList } from "../components/pages/BalanceOfPaymentList";

export const Router: VFC = memo(() => {

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="regist-user" element={<RegistUser />} />
            
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="edit" element={<EditAmount />} />
                    <Route path="balance-of-payment-list" element={<BalanceOfPaymentList />} />
                    <Route path="transition" element={<Usermanagement />} />
                </Route>
            
            <Route path="/*" element={<Page404 />} />
        </Routes>
    )
})