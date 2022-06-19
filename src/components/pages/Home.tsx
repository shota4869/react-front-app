import { VFC, memo, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"



export const Home: VFC = memo(() => {

    
    const { user, incomeCategory, expenditureCategory, saveAmount,init } = useHome();
    useEffect(() => {
        init();
    }, [init])
    const date = new Date()

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="right">おかえり、{ user && user.name }さん</Heading>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">本日使用できる金額は残り○○円です</Heading>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">今月の目標貯金額は〇〇円です</Heading>

            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab incomeArry={incomeCategory} expenditureArry={expenditureCategory} userId={ user == null ? 0 : Number(user.id) } />
            </Stack>
            <Outlet />
        </>
    )
})