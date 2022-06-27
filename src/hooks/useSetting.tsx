import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lineSetting } from "../type/api/lineSetting" 
import { amountSetting } from "../type/api/amountSetting" 
import { useMessage } from "./useMssage";


const HOME_API_BASE_URL = "http://localhost:8080/api/setting";

export const useSetting = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();

    const [amountSettings, setAmountSettings] = useState<amountSetting | null>(null);
    const [lineSettings, setLineSettings] = useState<lineSetting | null>(null);

    const init = useCallback(() => {

        axios.get(HOME_API_BASE_URL, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {

                
                setAmountSettings(res.data.amountSetting);
                setLineSettings(res.data.lineSetting);
                console.log(amountSettings)
            })
            .catch((err) => {
            
                navigate("/login")
            });

    }, [])

    const saveAmountAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL + "/amount" , form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "設定しました。", status: "success" })
            })
            .catch((err) => {
                showMessage({ title: "設定に失敗しました。", status: "error" })


            });

    }, [])

    const saveLineAction = useCallback((form: Object) => {

        axios.post(HOME_API_BASE_URL  + "/line"  , form, { withCredentials: true ,headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                showMessage({ title: "設定しました。", status: "success" })
            })
            .catch((err) => {
                showMessage({ title: "設定に失敗しました。", status: "error" })


            });

    }, [])

    return { init, saveAmountAction ,saveLineAction,amountSettings,lineSettings};
}