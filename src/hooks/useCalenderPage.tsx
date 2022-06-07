import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CALENDER_API_BASE_URL = "http://localhost:8080/api/home/calender";

export const useCalenderPage = () => {

    const navigate = useNavigate();

    const calender = useCallback(() =>{

        axios.get(CALENDER_API_BASE_URL,{withCredentials: true})
        .then((res) =>{

            console.log("calender")
        })
        .catch((err) => {

            // //リダイレクト
            navigate("/login")

        });

    },[])

    return { calender }
}