import axios from "axios";
import { useCallback } from "react";
const HOME_API_BASE_URL = "http://localhost:8080/api/setting/line";



export const useSaveLineSetting = () => {

    const saveAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL , form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                alert("保存に失敗しました。")

            });

    }, [])

    return { saveAction };
}