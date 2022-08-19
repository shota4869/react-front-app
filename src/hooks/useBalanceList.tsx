import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

const Balance_API_BASE_URL = "api/balance-list";


export const useBalanceList = () => {

    const navigate = useNavigate();
    const { showMessage } = useMessage();

    const [incomeList, setIncomeList] = useState([]);
    const [expenditureList, setExpenditureList] = useState([]);

    const getBalanceList = useCallback((requestJson: string) =>{

        axios.post(Balance_API_BASE_URL,requestJson,{withCredentials: true,headers: {'Content-Type': 'application/json'}})
        .then((res) =>{
            setIncomeList(res.data.incomeList);
            setExpenditureList(res.data.expenditureList);
        })
        .catch((err) => {

            showMessage({ title: "再度ログインしてください", status: "error" })
            //リダイレクト
            navigate("/")

        });

    },[showMessage,navigate])

    const calculateAction = useCallback((fixFlg: string) => {

        axios.post(Balance_API_BASE_URL + "/update", fixFlg, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                
            })
            .catch((err) => {
                showMessage({ title: "管理者に問い合わせてください。", status: "error" })
            });

    }, [showMessage])

    const deleteAction = useCallback((id: String,req: string,fixFlg:string) => {

        axios.delete(Balance_API_BASE_URL +"/"+ id,  { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "削除しました。", status: "success" })
                getBalanceList(req);
                calculateAction(fixFlg);
            })
            .catch((err) => {
                showMessage({ title: "削除に失敗しました。", status: "error" })
            });

    }, [showMessage,getBalanceList,calculateAction])

    

    return { getBalanceList ,incomeList ,expenditureList ,deleteAction,calculateAction}
}