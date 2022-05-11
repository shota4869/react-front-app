import { Box, Button,  Flex, Input, Stack } from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent } from "react"

import { HeaderLayout } from "../templete/HeaderLayout"


export const EditAmount: VFC = memo(() => {

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

    return (
        <>
            <HeaderLayout />
            <Flex align="center" justify="center">
                <Box>
                    <Stack spacing={4} px={4} py={10}>
                        <Input placeholder="種別" value={amount} onChange={onChangeAmount} />
                        <Input placeholder="金額" value={amount} onChange={onChangeAmount} />
                        <Input placeholder="yyyy-mm-dd" value={date} onChange={onChangePassword} />
                        <Flex justify="center">
                            <Box>
                                <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>登録</Button>
                                <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>戻る</Button>
                            </Box>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
})