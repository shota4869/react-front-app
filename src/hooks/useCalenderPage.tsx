import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const CALENDER_API_BASE_URL = "http://localhost:8080/api/home/calender";

export const useCalenderPage = () => {

    const navigate = useNavigate();

    const [calenderList, setCalenderList] = useState([]);


    const calender = useCallback(() =>{

        axios.get(CALENDER_API_BASE_URL,{withCredentials: true})
        .then((res) =>{

            setCalenderList(res.data.calenderDtoList);
            console.log(res.data)
        })
        .catch((err) => {

            // //リダイレクト
            navigate("/login")

        });

    },[navigate])

    return { calender , calenderList}
}