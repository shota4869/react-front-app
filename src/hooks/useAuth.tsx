import axios from "axios";
import { useCallback } from "react";
import { NavigateFunction } from "react-router-dom";

const LOGIN_API_BASE_URL = "http://localhost:8080/login";

export const useAuth = () => {

    const login = useCallback((login: String, navigate: NavigateFunction) =>{

        axios.post(LOGIN_API_BASE_URL,login,{withCredentials:true})
        .then(() =>{

            //TODO：ログイン状態のフラグをグローバル変数として設定するべきか
            navigate("/home")

        })
        .catch((err) => {
            alert(err + "ログイン失敗")
        });

    },[])

    return {login };
}