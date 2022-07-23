import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

const CALENDER_API_BASE_URL = "http://localhost:8080/api/home/calender";

export const useCalenderPage = () => {

    const navigate = useNavigate();

    const [calenderList, setCalenderList] = useState([]);

    const { showMessage } = useMessage();


    const calender = useCallback(() =>{

        axios.get(CALENDER_API_BASE_URL,{withCredentials: true})
        .then((res) =>{
            setCalenderList(res.data.calenderDtoList);
        })
        .catch((err) => {
            console.log(err.response.status);
            showMessage({ title: "管理者に問い合わせて下さい。", status: "error" })
            //リダイレクト
            navigate("/login")
        });

    },[showMessage,navigate])

    return { calender , calenderList}
}