import { Box,  Flex, FormLabel, Input, Select, Stack, Textarea, Container } from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent } from "react"

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import '../styles/date-picker.css';
import { SaveButton } from "../atoms/button/SaveButton";
import { useSaveBalance } from "../../hooks/useSaveBalance";

type Props ={
    categoryArry: never[],
    userId: Number,
    balanceFlg: Number
}

export const RegistForm: VFC<Props> = memo((props) => {
    const {categoryArry, userId, balanceFlg} = props;


    const today = new Date();
    //useState
    const [category, settCategory] = useState('')
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(today);
    const [remarks, setRemarks] = useState('')

    //useHooks
    const { saveAction } = useSaveBalance();
    

    registerLocale("ja", ja);
    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
    const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => settCategory(e.target.value);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setRemarks(event.target.value);
    
    const saveForm = JSON.stringify({'userId': userId, 'categoryCode': category, 'balanceFlg': balanceFlg ,'date': date, 'amount': amount, 'remarks': remarks })


    const onClickSaveButton = () => {
        if(category === ""){
            alert("カテゴリーを選択してください")
            return
        }
        if(date === null){
            alert("日付を入力してください")
            return
        }
        if( amount === "" ){
            alert("金額を入力してください")
            return
        }
        
        console.log(saveForm)
        

        saveAction(saveForm);
    }

    return (
        <Stack spacing={4} px={10} py={3}>
            <Container maxW="600px">
                <FormLabel>カテゴリー</FormLabel>
                <Select placeholder='選択してください' onChange={onChangeCategory} >
                    {categoryArry.map((key) => {
                        return <option key={key['id']} value={key['id']} >{key['categoryName']}</option>
                    })}
                </Select>
                <FormLabel htmlFor="date">年月日</FormLabel>
                <DatePicker id="date" dateFormat="yyyy/MM/dd" selected={date} onChange={selectedDate => { setDate(selectedDate || today) }} locale={ja} />
                <FormLabel htmlFor="amount">金額</FormLabel>
                <Input id="amount" placeholder="" value={amount} onChange={onChangeAmount} type="number" />
                <FormLabel>備考</FormLabel>
                <Textarea placeholder="" value={remarks} onChange={handleInputChange} maxLength={500} />
                <Flex justify="center" >
                    <Box py={4}>
                        <SaveButton onClick={onClickSaveButton} />
                    </Box>
                </Flex>
            </Container>
        </Stack>
    )
})