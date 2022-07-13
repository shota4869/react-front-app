import { VFC, memo, useEffect,useContext } from "react"
import { Outlet } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"
import { LoginUserContext } from "../../providers/LoginUserProvider"

export const Home: VFC = memo(() => {
    
    const {  saveAmount, usableAmount ,init, saveAction } = useHome();


    const { loginUser } = useContext(LoginUserContext);


    useEffect(() => {
        init();
    }, [init])

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="right">おかえり、{ loginUser && loginUser.name }さん</Heading>
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">今月の固定収入：{usableAmount.toLocaleString()}円</Heading>
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">今月の固定支出：{usableAmount.toLocaleString()}円</Heading>
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">今月の目標貯金額：{saveAmount.toLocaleString()}円</Heading>
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">１日に使える金額：{usableAmount.toLocaleString()}円</Heading>
            <Stack spacing={4} px={4} py={5}>
                {/* <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading> */}
                <RegistFormTab saveAction={saveAction} headerWord={""} index={0} fixFlg={"0"}/>
            </Stack>
            <Outlet />

        </>
    )
})