import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { registUser } from "../type/api/registUser"
import { useMessage } from "./useMessage";

const LOGIN_API_BASE_URL = "springboot-rest-api/api/user/regist-user";


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

        navigate("/")
      })
      .catch((error) => {
        console.log(error)
        if (error.response) {
          // このリクエストはステータスコードとともに作成されます
          // 2xx系以外の時にエラーが発生します
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // このリクエストはレスポンスが返ってこない時に作成されます。
          // `error.request`はXMLHttpRequest のインスタンスです。
          console.log(error.request);
        } else {
          //それ以外で何か以上が起こった時
          console.log('Error', error.message);
        }
      });

  }, [navigate,showMessage])

  return { registUser };
}