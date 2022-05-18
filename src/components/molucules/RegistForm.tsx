import { Box, Button, Flex, FormLabel, Input, Select, Stack, Textarea } from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent, ChangeEventHandler } from "react"


export const RegistForm: VFC = memo(() => {

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [remarks, setRemarks] = useState('')


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
    const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRemarks(event.target.value)
    }

    return (
            <Stack spacing={4} px={60} py={3}>
                <FormLabel>カテゴリー</FormLabel>
                <Select placeholder='' size='lg'>
                    <option value=''></option>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <FormLabel>年月日</FormLabel>
                <Input placeholder="yyyymmdd" value={date} onChange={onChangeDate} size='lg'/>
                <FormLabel>金額</FormLabel>
                <Input placeholder="" value={amount} onChange={onChangeAmount} size='lg'/>
                <FormLabel>備考</FormLabel>
                <Textarea placeholder="" value={remarks} onChange={handleInputChange} size='lg' maxLength={500}/>
                <Flex justify="center" >
                    <Box>
                        <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>保存</Button>
                    </Box>
                </Flex>
            </Stack>
    )
})