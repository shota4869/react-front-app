import axios from "axios";
import { useCallback, useState } from "react";
import { NavigateFunction } from "react-router-dom";

const HOME_API_BASE_URL = "http://localhost:8080/api/home";


type User = {
    id: Number,
    name: string,
    username: string
}
export const useHome = () => {

    const [user, setUser] = useState<User | null>(null);
    const [incomeCategory, setIncomeCategory] = useState([]);
    const [expenditureCategory, setExpenditureCategory] = useState([]);

    const home = useCallback((navigate: NavigateFunction) => {

        let obj: User ={id: 0,name: "", username: ""};
        axios.get(HOME_API_BASE_URL, { withCredentials: true })
            .then((res) => {
                //useStateに設定して呼び出し元に返すのは難しい？
                //オブジェクトに詰め直して返すのも難しそう？
                const userInfo:User = { id: res.data.userDetails.id, name: res.data.userDetails.name, username: res.data.userDetails.username }
                const userIncomeCategory =res.data.incomeCategory
                const userExpenditure = res.data.expenditureCategory
                setUser({ id: res.data.userDetails.id, name: res.data.userDetails.name, username: res.data.userDetails.username });
                setIncomeCategory(res.data.incomeCategory)
                setExpenditureCategory(res.data.expenditureCategory)
                obj = userInfo;
            })
            .catch((err) => {
                // //リダイレクト
                navigate("/login")
            });
            if(obj!=undefined){
                return obj;

            }

    }, [])

    return { home, user, incomeCategory, expenditureCategory };
}
