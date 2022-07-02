import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { homeForm } from "../type/api/homeForm";
import { useMessage } from "./useMssage";

const HOME_API_BASE_URL = "http://localhost:8080/api/home";

export const useHome = () => {

    const { showMessage } = useMessage();

    const navigate = useNavigate();
    const [incomeCategory, setIncomeCategory] = useState([]);
    const [expenditureCategory, setExpenditureCategory] = useState([]);
    const [saveAmount, setSaveAmount] = useState(0);
    const [usableAmount, setUsableAmount] = useState(0);


    const init = useCallback(() => {
        axios.get(HOME_API_BASE_URL, { withCredentials: true })
            .then(res => {
                setIncomeCategory(res.data.incomeCategory)
                setExpenditureCategory(res.data.expenditureCategory)
                setSaveAmount(res.data.saveAmount)
                setUsableAmount(res.data.usableAmount)
            })
            .catch(err => {
                navigate("/login")
            })
    }, [navigate])

    const saveAction = useCallback((form: homeForm) => {

        if (form.categoryCode === "") {
            alert("カテゴリーを選択してください")
            return
        }
        if (form.date === null) {
            alert("日付を入力してください")
            return
        }
        if (form.amount === "") {
            alert("金額を入力してください")
            return
        }

        const requestForm = JSON.stringify(form);
        console.log(requestForm)

        axios.post(HOME_API_BASE_URL + "/save", requestForm, { withCredentials: true, headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                console.log(res.data)
                showMessage({ title: "保存しました。", status: "success" })
                setUsableAmount(res.data)
            })
            .catch(() => {
                showMessage({ title: "保存に失敗しました。", status: "error" })
            });
    }, [showMessage])

    return {  incomeCategory, expenditureCategory, saveAmount, init, saveAction ,usableAmount}
}