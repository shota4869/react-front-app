import axios from "axios";
import { useCallback } from "react";
const HOME_API_BASE_URL = "http://localhost:8080/api/setting";



export const useSetting = () => {

    const init = useCallback(() => {

        axios.get(HOME_API_BASE_URL, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                alert("保存に失敗しました。")

            });

    }, [])

    return { init };
}