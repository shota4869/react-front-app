import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpenditureCategoryListContext } from "../providers/ExpenditureCategoryListProvider";
import { IncomeCategoryListContext } from "../providers/IncomeCategoryListProvider";
import { homeForm } from "../type/api/homeForm";
import { useMessage } from "./useMessage";

const HOME_API_BASE_URL = "springboot-rest-api/api/home";

export const useHome = () => {

    const { showMessage } = useMessage();

    const { setIncomeCategory } = useContext(IncomeCategoryListContext);
    const { setExpenditureCategory } = useContext(ExpenditureCategoryListContext);

    const navigate = useNavigate();
    const [usableAmount, setUsableAmount] = useState(0);
    const [balanceAmount, setBalanceAmount] = useState(0);
    const [restUsableAmount, setRestUsableAmount] = useState(0);

    const init = useCallback(() => {
        axios.get(HOME_API_BASE_URL, { withCredentials: true })
            .then((res) => {
                setIncomeCategory(res.data.incomeCategory)
                setExpenditureCategory(res.data.expenditureCategory)
                setUsableAmount(res.data.usableAmount)
                setBalanceAmount(res.data.balanceAmount)
                setRestUsableAmount(res.data.restUsableAmount)

            })
            .catch((err) => {
                showMessage({ title: "再度ログインしてください", status: "error" })
                //リダイレクト
                navigate("/")
            })
    }, [showMessage,navigate, setIncomeCategory, setExpenditureCategory])

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

        axios.post(HOME_API_BASE_URL + "/save", requestForm, { withCredentials: true, headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                showMessage({ title: "保存しました。", status: "success" })
                setRestUsableAmount(res.data.restAmount)
                setBalanceAmount(res.data.balanceAmount)
            })
            .catch(() => {
                showMessage({ title: "保存に失敗しました。", status: "error" })
            });
    }, [showMessage])

    return { init, saveAction, usableAmount, balanceAmount, restUsableAmount }
}