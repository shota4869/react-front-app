import axios from "axios";
import { useCallback } from "react";
import { useBalanceList } from "./useBalanceList";

const HOME_API_BASE_URL = "http://localhost:8080/api/balance-list";

export const useDeleteBalance = () => {



    const deleteAction = useCallback((id: String) => {

        axios.delete(HOME_API_BASE_URL +"/"+ id,  { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                console.log(res.data)
                
            })
            .catch((err) => {
                alert("削除に失敗しました。")

            });

    }, [])

    return { deleteAction };
}