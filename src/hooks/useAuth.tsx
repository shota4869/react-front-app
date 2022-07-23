import axios from "axios";
import { useCallback, useContext } from "react";
import { NavigateFunction } from "react-router-dom";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useMessage } from "./useMessage";

const LOGIN_API_BASE_URL = "http://localhost:8080/login";
const LOGIN_API_GET_BASE_URL = "http://localhost:8080/api/login";


export const useAuth = () => {

    const { showMessage } = useMessage();

    const { setLoginUser } = useContext(LoginUserContext);


    const getAuth = useCallback(() => {

        axios.get(LOGIN_API_GET_BASE_URL,{withCredentials:true})
        .then((res) => {
            setLoginUser(res.data.userDetails);

        }).catch((err) => {
            showMessage({ title: "ログイン情報の取得に失敗しました。", status: "error" })
        })

    },[showMessage,setLoginUser])

    const login = useCallback((login: String, navigate: NavigateFunction) =>{

        axios.post(LOGIN_API_BASE_URL,login,{withCredentials:true})
        .then((res) =>{

            console.log(res)
            showMessage({ title: "ログインしました", status: "success" })
            navigate("/home")
            getAuth();
        })
        .catch((err) => {
            showMessage({ title: "ログインに失敗しました", status: "error" })

        });

    },[getAuth, showMessage])

    

    return {login };
}