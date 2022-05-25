import axios from "axios";
import { useCallback, useState } from "react";
import { NavigateFunction } from "react-router-dom";

const HOME_API_BASE_URL = "http://localhost:8080/api/home";



export const useHome = () => {

    const [user ,setUser] = useState('');

    const home = useCallback((navigate:NavigateFunction) =>{

        axios.get(HOME_API_BASE_URL,{withCredentials: true})
        .then((res) =>{
            console.log(res.data);
            setUser(res.data.name);
        })
        .catch((err) => {

            // //リダイレクト
            navigate("/login")
            

        });

    },[])

    return { home ,user};
}