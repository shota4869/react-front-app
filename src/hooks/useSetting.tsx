import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lineSetting } from "../type/api/lineSetting" 
import { amountSetting } from "../type/api/amountSetting" 
import { useMessage } from "./useMessage";
import { homeForm } from "../type/api/homeForm";


const HOME_API_BASE_URL = "http://localhost:8080/api/setting";

export const useSetting = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();

    const [amountSettings, setAmountSettings] = useState<amountSetting | null>(null);
    const [lineSettings, setLineSettings] = useState<lineSetting | null>(null);
    const [incomeAmount, setIncomeAmount] = useState(0);
    const [expenditureAmount, setExpenditureAmount] = useState(0);

    const init = useCallback(() => {

        axios.get(HOME_API_BASE_URL, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                setAmountSettings(res.data.amountSetting);
                setLineSettings(res.data.lineSetting);
                setIncomeAmount(res.data.fixIncomeAmount);
                setExpenditureAmount(res.data.fixExpenditureAmount);
            })
            .catch((err) => {
                console.log(err)
                navigate("/login")
            });

    }, [navigate])

    const saveAmountAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL + "/amount" , form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "設定しました。", status: "success" })
            })
            .catch((err) => {
                showMessage({ title: "設定に失敗しました。", status: "error" })


            });

    }, [showMessage])

    const saveLineAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL  + "/line"  , form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "設定しました。", status: "success" })
            })
            .catch((err) => {
                showMessage({ title: "設定に失敗しました。", status: "error" })


            });

    }, [showMessage])

    const saveBalanceAction = useCallback((form: homeForm) => {

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

        axios.post(HOME_API_BASE_URL  + "/balance"  , form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "設定しました。", status: "success" })
                setIncomeAmount(res.data.fixIncomeAmount);
                setExpenditureAmount(res.data.fixExpenditureAmount);
            })
            .catch((err) => {
                showMessage({ title: "設定に失敗しました。", status: "error" })


            });

    }, [showMessage])

    return { init, saveAmountAction,saveLineAction, amountSettings, lineSettings, incomeAmount, expenditureAmount,saveBalanceAction};
}