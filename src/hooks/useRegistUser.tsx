import axios from "axios";
import { useCallback } from "react";
import { NavigateFunction } from "react-router-dom";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/user/regist-user";


export const useRegistUser = () => {

    const registUser = useCallback((user: String, navigate: NavigateFunction) =>{

        axios.post(LOGIN_API_BASE_URL,user ,{headers: {'Content-Type': 'application/json'}})
        .then(() =>{
            
            navigate("/login")
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

    },[])

    return { registUser };
}