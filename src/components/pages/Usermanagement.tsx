import { Button } from "@chakra-ui/react"
import { VFC, memo } from "react"

import { HeaderLayout } from "../templete/HeaderLayout"


export const Usermanagement: VFC = memo(() => {

    const onClickLoginButton = () => {

        alert("hello")
    }

    return (
        <>
            <HeaderLayout />

            <p>ユーザページです</p>
            <div>
                <label>email</label>
                <input type="text" />
            </div>
            <div>
                <label>password</label>
                <input type="password" />
            </div>
            <div>
                <Button>ボタン</Button>
                <button onClick={onClickLoginButton}>ログイン</button>
                <button>登録</button>
            </div>
        </>
    )
})