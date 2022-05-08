import axios from "axios";
import { useCallback } from "react";
import { NavigateFunction } from "react-router-dom";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/user/regist-user";


export const useRegistUser = () => {

    const registUser = useCallback((user: String, navigate: NavigateFunction) =>{

        axios.post(LOGIN_API_BASE_URL,user ,{headers: {'Content-Type': 'application/json'}})
        .then(() =>{
            
            navigate("/login")
        })
        .catch((err) => {
            alert(err)
        });

    },[])

    return { registUser };
}