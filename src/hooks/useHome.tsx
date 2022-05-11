import axios from "axios";
import { useCallback } from "react";
import { NavigateFunction } from "react-router-dom";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/home";

export const useHome = () => {

    const home = useCallback((navigate:NavigateFunction) =>{

        axios.get(LOGIN_API_BASE_URL,{withCredentials: true})
        .then((res) =>{

        })
        .catch((err) => {

            // //リダイレクト
            navigate("/login")

        });

    },[])

    return { home };
}