import { Box, Button, Flex, FormLabel, forwardRef, Input, Select, Stack, Textarea } from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent, ChangeEventHandler } from "react"

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import '../styles/date-picker.css';

export const RegistForm: VFC = memo(() => {

    const today = new Date();
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(today);
    const [remarks, setRemarks] = useState('')


    // // customDateInput.tsx
    // const customDateInput = ({onChange} ) => (
    //     <Input placeholder="Description"  onChange={onChange}/>
    // );
    // customDateInput.displayName = 'DateInput';

    // // MyForm.tsx
    // const CustomInput = forwardRef(customDateInput);

    registerLocale("ja", ja);
    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
    // const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRemarks(event.target.value)
    }


    const oj = {
        1: "a",
    }
    const oj2 = {
        1: "b",
        2: "b",
        3: "c"
    }
    const oj3 = {
        1: "c",
    }
    const array = [oj,oj2,oj3]

    return (
        <Stack spacing={4} px={10} py={3}>
            <FormLabel>カテゴリー</FormLabel>
            <Select placeholder='' >
                {array.map((key) => {
                    console.log(key)
                return <option key={key[1]} value={key[1]}>{key[1]}</option>
                })}
            </Select>
            <FormLabel htmlFor="date">年月日</FormLabel>
            <DatePicker id="date" dateFormat="yyyy/MM/dd" selected={date} onChange={selectedDate => { setDate(selectedDate || today) }} locale={ja} />
            <FormLabel htmlFor="amount">金額</FormLabel>
            <Input id="amount" placeholder="" value={amount} onChange={onChangeAmount} />
            <FormLabel>備考</FormLabel>
            <Textarea placeholder="" value={remarks} onChange={handleInputChange} maxLength={500} />
            <Flex justify="center" >
                <Box>
                    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>保存</Button>
                </Box>
            </Flex>
        </Stack>
    )
})