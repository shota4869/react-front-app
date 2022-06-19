import { Box, Flex, FormLabel, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import ReactDatePicker from "react-datepicker";
import { SaveButton } from "../atoms/button/SaveButton";
import ja from "date-fns/locale/ja";
import { useSaveAmountSetting } from "../../hooks/useSaveAmountSetting";

export const AmountSettingForm: VFC = memo(() => {

    //貯金額Form
    // const [goalMonth, setGoalMonth] = useState<Date | null>(null);
    const [goalAmount, setGoalAmount] = useState('');
    const [fixIncome, setFixIncome] = useState('');
    const [fixExpenditure, setFixExpenditure] = useState('');

    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setGoalAmount(e.target.value);
    const onChangeFixIncome = (e: ChangeEvent<HTMLInputElement>) => setFixIncome(e.target.value);
    const onChangeFixExpenditure = (e: ChangeEvent<HTMLInputElement>) => setFixExpenditure(e.target.value);
    // const onChangeMonth = (selectedDate:Date| React.SyntheticEvent<any, Event> | undefined) => setGoalMonth(selectedDate || null);
    

    const requestForm = {"goalAmount": goalAmount,"fixIncome": fixIncome,"fixExpenditure": fixExpenditure}
    // "goalMonth": goalMonth && goalMonth.toLocaleDateString().substring(0,6) ,
    const { saveAction } = useSaveAmountSetting();
    const onClickSetting = () =>{
        saveAction(requestForm);
    }

    return (
        <>
            <Stack spacing={4} px={10} py={3}>
                {/* <FormLabel htmlFor="month">貯金する月</FormLabel>
                <ReactDatePicker showMonthYearPicker id="date" dateFormat="yyyy/MM" autoComplete="off" selected={goalMonth} onChange={(selectedDate)=>{setGoalMonth(selectedDate || null) }} locale={ja} /> */}
                <FormLabel htmlFor="amount">目標貯金額</FormLabel>
                <Input id="amount" placeholder="" value={goalAmount} onChange={onChangeAmount} type="number" />
                <FormLabel htmlFor="amount">固定収入</FormLabel>
                <Input id="amount" placeholder="" value={fixIncome} onChange={onChangeFixIncome} type="number" />
                <FormLabel htmlFor="amount">固定支出</FormLabel>
                <Input id="amount" placeholder="" value={fixExpenditure} onChange={onChangeFixExpenditure} type="number" />
                <Flex justify="center" >
                    <Box py={4}>
                        <SaveButton onClick={onClickSetting}>設定</SaveButton>
                    </Box>
                </Flex>
            </Stack>
        </>
    )


})