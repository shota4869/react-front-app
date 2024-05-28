import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { registUser } from "../type/api/registUser"
import { useMessage } from "./useMessage";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/user/regist-user";


export const useRegistUser = () => {

  const navigate = useNavigate();
  const { showMessage } = useMessage();


  const registUser = useCallback((user: registUser) => {

    if (user.username === "") {
      showMessage({ title: "名前を入力してください", status: "warning" })
      return
    }
    if (user.email === "") {
      showMessage({ title: "メールアドレスを入力してください", status: "warning" })
      return
    }
    if (user.password === "") {
      showMessage({ title: "パスワードを入力してください", status: "warning" })
      return
    }
    if (user.password !== user.repassword) {
      showMessage({ title: "パスワードが正しくありません", status: "warning" })
      return
    }

    const requestForm = JSON.stringify(user);

    axios.post(LOGIN_API_BASE_URL, requestForm, { headers: { 'Content-Type': 'application/json' } })
      .then(() => {
        showMessage({ title: "登録しました。", status: "success" })
        navigate("/")
      })
      .catch((error) => {
        showMessage({ title: "他のメールアドレスを使用して下さい。", status: "error" })
        
      });

  }, [navigate,showMessage])

  return { registUser };
}