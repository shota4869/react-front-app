import axios from "axios";
import { useCallback } from "react";
const HOME_API_BASE_URL = "http://localhost:8080/api/home/save";



export const useSaveBalance = () => {

    const saveAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL, form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                alert("成功しました。")
            })
            .catch((err) => {
                alert("保存に失敗しました。")

            });

    }, [])

    return { saveAction };
}