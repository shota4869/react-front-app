import { VFC, memo, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"



export const Home: VFC = memo(() => {

    
    const { user, incomeCategory, expenditureCategory, saveAmount,init } = useHome();
    const [amount ,setAmount] = useState([]);
    useEffect(() => {
        init();
    }, [])
    const date = new Date()

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">{ user && user.name }様の貯金額:{saveAmount.toLocaleString()}円</Heading>
            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab incomeArry={incomeCategory} expenditureArry={expenditureCategory} userId={ user == null ? 0 : Number(user.id) } />
            </Stack>
            <Outlet />
        </>
    )
})