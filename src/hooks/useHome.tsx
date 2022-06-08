import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const HOME_API_BASE_URL = "http://localhost:8080/api/home";


type User = {
    id: Number,
    name: string,
    username: string
}
export const useHome = () => {


    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [incomeCategory, setIncomeCategory] = useState([]);
    const [expenditureCategory, setExpenditureCategory] = useState([]);
    const [saveAmount, setSaveAmount] = useState([]);



    const init = useCallback(() => {
        axios.get(HOME_API_BASE_URL, { withCredentials: true })
            .then(res => {
                setUser(res.data.userDetails)
                setIncomeCategory(res.data.incomeCategory)
                setExpenditureCategory(res.data.expenditureCategory)
                setSaveAmount(res.data.saveAmount)
                console.log("hi")

            })
            .catch(err => {
                navigate("/login")
            })
    },[navigate])

    return { user, incomeCategory, expenditureCategory, saveAmount ,init}
}