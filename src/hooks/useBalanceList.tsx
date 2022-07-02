import axios from "axios";
import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMssage";

const Balance_API_BASE_URL = "http://localhost:8080/api/balance-list";


export const useBalanceList = () => {

    // const navigate = useNavigate();
    const { showMessage } = useMessage();

    const [incomeList, setIncomeList] = useState([]);
    const [expenditureList, setExpenditureList] = useState([]);

    const getBalanceList = useCallback((requestJson: string) =>{

        axios.post(Balance_API_BASE_URL,requestJson,{withCredentials: true,headers: {'Content-Type': 'application/json'}})
        .then((res) =>{

            setIncomeList(res.data.incomeList);
            setExpenditureList(res.data.expenditureList);

            console.log(res.data)
            
        })
        .catch((err) => {

            // //リダイレクト

        });

    },[])

    const deleteAction = useCallback((id: String,req: string) => {

        axios.delete(Balance_API_BASE_URL +"/"+ id,  { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "削除しました。", status: "success" })
                getBalanceList(req);
            })
            .catch((err) => {
                alert("削除に失敗しました。")

            });

    }, [showMessage,getBalanceList])

    return { getBalanceList ,incomeList ,expenditureList ,deleteAction}
}