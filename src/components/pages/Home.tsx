import { VFC, memo, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { HeaderLayout } from "../templete/HeaderLayout"
import { RegistFormTab } from "../organisms/layout/RegistFormTab"

export const Home: VFC = memo(() => {


    const { home } = useHome();
    const navigate = useNavigate();

    useEffect(() => {
        home(navigate);
    }, [])

    const date = new Date()

    return (
        <>
            <HeaderLayout />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">貯金額:1,500,000円</Heading>
            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab />
            </Stack>
            <Outlet />
        </>
    )
})