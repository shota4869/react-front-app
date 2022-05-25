import axios from "axios";
import { useCallback, useState } from "react";
import { NavigateFunction } from "react-router-dom";

const HOME_API_BASE_URL = "http://localhost:8080/api/home";



export const useHome = () => {

    const [user ,setUser] = useState('');
    const [incomeCategory ,setIncomeCategory] = useState([]);
    const [expenditureCategory ,setExpenditureCategory] = useState([]);



    const home = useCallback((navigate:NavigateFunction) =>{

        axios.get(HOME_API_BASE_URL,{withCredentials: true})
        .then((res) =>{
            console.log(res.data);
            setUser(res.data.userDetails.name);
            setIncomeCategory(res.data.incomeCategory)
            setExpenditureCategory(res.data.expenditureCategory)
            console.log(incomeCategory)


        })
        .catch((err) => {

            // //リダイレクト
            navigate("/login")
            

        });

    },[])

    return { home ,user ,incomeCategory,expenditureCategory};
}