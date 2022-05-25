import { VFC, memo, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"
import { SaveButton } from "../atoms/button/SaveButton"



export const Home: VFC = memo(() => {


    const { home, user ,incomeCategory ,expenditureCategory} = useHome();
    const navigate = useNavigate();

    useEffect(() => {
        home(navigate);
    }, [])


    
    const date = new Date()

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">{user}様の貯金額:1,500,000円</Heading>
            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab incomeArry={incomeCategory} expenditureArry={expenditureCategory}/>
            </Stack>
            <Outlet />
        </>
    )
})