import axios from "axios";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useMessage } from "./useMessage";

const LOGIN_API_BASE_URL = "api/login";


export const useAuth = () => {

    const { showMessage } = useMessage();

    const { setLoginUser } = useContext(LoginUserContext);

    const navigate = useNavigate();


    const getAuth = useCallback(() => {

        axios.get(LOGIN_API_BASE_URL,{withCredentials:true})
        .then((res) => {
            setLoginUser(res.data.userDetails);
            navigate("/home")
        }).catch((err) => {
            showMessage({ title: "ログイン情報の取得に失敗しました。", status: "error" })
        })

    },[showMessage,setLoginUser,navigate])

    const login = useCallback((login: String) =>{

        axios.post(LOGIN_API_BASE_URL,login,{withCredentials:true})
        .then((res) =>{
            showMessage({ title: "ログインしました", status: "success" })
            getAuth();
        })
        .catch((err) => {
            showMessage({ title: "ログインに失敗しました", status: "error" })
        });

    },[getAuth, showMessage])

    

    return {login };
}