import { Box, Button, Flex, FormLabel, Input, Stack } from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent } from "react"


export const RegistForm: VFC = memo(() => {

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

    return (
        <>
            <Flex align="center" justify="center">
                <Box>
                    <Stack spacing={4} px={4} py={10}>
                        <FormLabel>カテゴリー</FormLabel>
                        <Input placeholder="" value={amount} onChange={onChangeAmount} />
                        <FormLabel>年月日</FormLabel>
                        <Input placeholder="yyyymmdd" value={amount} onChange={onChangeAmount} />
                        <FormLabel>金額</FormLabel>
                        <Input placeholder="yyyymmdd" value={date} onChange={onChangePassword} />
                        <FormLabel>備考</FormLabel>
                        <Input placeholder="" value={date} onChange={onChangePassword} />
                        <Flex justify="center">
                            <Box>
                                <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>保存</Button>
                            </Box>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
})