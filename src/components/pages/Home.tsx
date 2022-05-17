import { VFC, memo, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Box, Divider, Flex, Heading, Input, Stack, useDisclosure } from "@chakra-ui/react"


import { HeaderLayout } from "../templete/HeaderLayout"
import { RegistForm } from "../organisms/layout/RegistForm"
import { BalanceTableTab } from "../organisms/layout/BalanceTableTab"
import { RegistModal } from "./modals/RegistModal"

export const Home: VFC = memo(() => {


    const { home } = useHome();
    const navigate = useNavigate();

    useEffect(() => {
        home(navigate);
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onOpenModal = () => {
        onOpen();
    }

    const date = new Date()

    return (
        <>
            <HeaderLayout />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">貯金額:1,500,000円</Heading>
            {/* <Calender /> */}
            {/* <RegistForm /> */}
            <Stack spacing={4} px={4} py={5}>
                <label>{date.toLocaleDateString()}</label>

                <BalanceTableTab onOpen={onOpenModal} />
            </Stack>
            <RegistModal isOpen={isOpen} onClose={onClose} />
            <Outlet />
        </>
    )
})