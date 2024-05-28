import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/logout";

export const useLogout = () => {

    const { showMessage } = useMessage();
    const navigate = useNavigate();

    const logout = useCallback(() =>{

        axios.get(LOGIN_API_BASE_URL,{withCredentials:true})
        .then(() =>{

            navigate("/")

        })
        .catch((err) => {
            showMessage({ title: "管理者に問い合わせて下さい。", status: "error" })
        });

    },[showMessage,navigate])

    return {logout };
}