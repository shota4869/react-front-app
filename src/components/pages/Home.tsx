import { VFC, memo, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"
import { useState } from "react"

type User = {
    id: Number,
    name: string,
    username: string
}

export const Home: VFC = memo(() => {

    const [incomeCategory1,setIncomeCtegory1] = useState([]);
    const [expenditureCategory1,setExpenditureCtegory1] = useState([]);
    const [user1, setUser1] = useState<User | null>(null);


    
    const { user, incomeCategory, expenditureCategory, saveAmount,init } = useHome();
    useEffect(() => {
        // const { user, incomeCategory, expenditureCategory, saveAmount,init } = useHome();
        init();
        setIncomeCtegory1(incomeCategory)
        setExpenditureCtegory1(expenditureCategory)
        setUser1(user)

    }, [init,user1])
    const date = new Date()

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="right">おかえり、{ user1 && user1.name }さん</Heading>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">本日使用できる金額は残り○○円です</Heading>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">今月の目標貯金額は〇〇円です</Heading>

            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab incomeArry={incomeCategory1} expenditureArry={expenditureCategory1} userId={ user1 == null ? 0 : Number(user1.id) } />
            </Stack>
            <Outlet />
        </>
    )
})