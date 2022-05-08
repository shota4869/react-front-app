import axios from "axios";
import { useCallback } from "react";
import { NavigateFunction } from "react-router-dom";

const LOGIN_API_BASE_URL = "http://localhost:8080/logout";

export const useLogout = () => {

    const logout = useCallback((navigate: NavigateFunction) =>{

        axios.get(LOGIN_API_BASE_URL,{withCredentials:true})
        .then(() =>{

            navigate("/login")

        })
        .catch((err) => {
            alert(err)
        });

    },[])

    return {logout };
}