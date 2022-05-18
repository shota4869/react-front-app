import {  Stack, useDisclosure } from "@chakra-ui/react"
import { BalanceTableTab } from "../organisms/layout/BalanceTableTab"
import { HeaderLayout } from "../templete/HeaderLayout"
import { EditModal } from "./modals/EditModal"


export const BalanceOfPayment = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onOpenModal = () => {
        onOpen();
    }

    return (
        <>
            <HeaderLayout />
            <Stack spacing={4} px={4} py={5}>

                <BalanceTableTab onOpen={onOpenModal} />
            </Stack>
            <EditModal onClose={onClose} isOpen={isOpen}/>
        </>
    )
}