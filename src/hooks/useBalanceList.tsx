import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Balance_API_BASE_URL = "http://localhost:8080/api/balance-list";


export const useBalanceList = (requestJson: string) => {

    const navigate = useNavigate();

    const [incomeList, setIncomeList] = useState([]);
    const [expenditureList, setExpenditureList] = useState([]);

    const balanceList = useCallback(() =>{

        axios.post(Balance_API_BASE_URL,requestJson,{withCredentials: true,headers: {'Content-Type': 'application/json'}})
        .then((res) =>{

            setIncomeList(res.data.incomeList);
            setExpenditureList(res.data.expenditureList);
            

            console.log(res.data)
        })
        .catch((err) => {

            // //リダイレクト
            navigate("/login")

        });

    },[])

    return { balanceList ,incomeList ,expenditureList }
}