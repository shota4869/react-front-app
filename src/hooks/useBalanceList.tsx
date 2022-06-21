import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Balance_API_BASE_URL = "http://localhost:8080/api/balance-list";


export const useBalanceList = () => {

    const navigate = useNavigate();

    const [incomeList, setIncomeList] = useState([]);
    const [expenditureList, setExpenditureList] = useState([]);

    const findBalanceList = useCallback((requestJson: string) =>{

        axios.post(Balance_API_BASE_URL,requestJson,{withCredentials: true,headers: {'Content-Type': 'application/json'}})
        .then((res) =>{

            setIncomeList(res.data.incomeList);
            setExpenditureList(res.data.expenditureList);
            
        })
        .catch((err) => {

            // //リダイレクト

        });

    },[])

    const deleteAction = useCallback((id: String) => {

        axios.delete(Balance_API_BASE_URL +"/"+ id,  { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                console.log(res.data)
                
            })
            .catch((err) => {
                alert("削除に失敗しました。")

            });

    }, [])

    return { findBalanceList ,incomeList ,expenditureList ,deleteAction}
}