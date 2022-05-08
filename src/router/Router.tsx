import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { Usermanagement } from "../components/pages/Usermanagement";
import { Page404 } from "../components/pages/Page404";
import { Layout } from "../components/pages/Layout";
import { RegistUser } from "../components/pages/RegistUser";

export const Router: VFC = memo(() => {

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="regist-user" element={<RegistUser />} />
            
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="user_management" element={<Usermanagement />} />
                </Route>
            
            <Route path="/*" element={<Page404 />} />
        </Routes>
    )
})