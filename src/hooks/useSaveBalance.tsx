import axios from "axios";
import { useCallback } from "react";
import { useHome } from "./useHome";
const HOME_API_BASE_URL = "http://localhost:8080/api/home/save";



export const useSaveBalance = () => {

    const { init } = useHome();

    const saveAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL, form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                console.log(res.data)
                init()
            })
            .catch((err) => {
                alert("保存に失敗しました。")

            });

    }, [])

    return { saveAction };
}