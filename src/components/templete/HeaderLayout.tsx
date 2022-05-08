import { memo, VFC } from "react"
import { Header } from "../organisms/layout/Header"


export const HeaderLayout: VFC = memo(() => {

    // const { children } = props;
    return (
        <>
            <Header />
        </>
    )
})