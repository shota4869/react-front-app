import { Box,  Flex, FormLabel, Input, Select, Stack, Textarea, Container, Heading} from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent, useEffect, ReactNode } from "react"
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import '../styles/date-picker.css';
import { SaveButton } from "../atoms/button/SaveButton";
import { homeForm } from "../../type/api/homeForm"
registerLocale('ja', ja)

type Props ={
    categoryArry: never[],
    balanceFlg: number,
    saveAction: (form: homeForm) => void,
    fixFlg: string,
    children: ReactNode
}

export const RegistForm: VFC<Props> = memo((props) => {
    const {categoryArry,  balanceFlg ,saveAction , fixFlg , children } = props;
    const today = new Date();
    const [category, settCategory] = useState('')
    const [amount, setAmount] = useState('');
    const [amountString, setAmountString] = useState('');
    const [date, setDate] = useState(today);
    const [remarks, setRemarks] = useState('')

    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== ""){
            setAmount(e.target.value)
            setAmountString(e.target.valueAsNumber.toLocaleString())
        } else {
            setAmount("")
            setAmountString("0")
        }
    }
    const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => settCategory(e.target.value);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setRemarks(event.target.value);
    
    const saveForm: homeForm = { categoryCode: category,  balanceFlg , date: date.toLocaleDateString('en-ZA').substring(0,10) ,  amount,  remarks , fixFlg}
    const onClickSaveButton = () => {
        saveAction(saveForm);
    }

    useEffect(() =>{
        // balanceFlg === 0 ? setTitle('収入') :  setTitle('支出')
        setAmount("")
        setAmountString("0")
    },[])
    

    return (
        <Stack spacing={4} px={10} py={3}>
            <Container maxW="600px">
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">{children}入力</Heading>
                <FormLabel>カテゴリー</FormLabel>
                <Select placeholder='選択してください' onChange={onChangeCategory} >
                    {categoryArry.map((key) => {
                        return <option key={key['id']} value={key['id']} >{key['categoryName']}</option>
                    })}
                </Select> 
                <FormLabel htmlFor="date">年月日</FormLabel>
                <DatePicker id="date" dateFormat="yyyy/MM/dd" selected={date} onChange={selectedDate => { setDate(selectedDate || today) }} locale={ja} />
                <FormLabel htmlFor="amount">金額({amountString}円)</FormLabel>
                <Input id="amount" placeholder="" value={amount} onChange={onChangeAmount} type="number" />
                <FormLabel>備考</FormLabel>
                <Textarea placeholder="" value={remarks} onChange={handleInputChange} maxLength={500} />
                <Flex justify="center" >
                    <Box py={4}>
                        <SaveButton onClick={onClickSaveButton}>保存</SaveButton>
                    </Box>
                </Flex>
            </Container>
        </Stack>
    )
})