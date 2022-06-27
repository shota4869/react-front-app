import { Box, Flex, FormLabel, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { SaveButton } from "../atoms/button/SaveButton";
import { useSetting } from "../../hooks/useSetting";
import { amountSetting } from "../../type/api/amountSetting";


type Props = {
    amountSetting: amountSetting | null
}
export const AmountSettingForm: VFC<Props> = memo((props) => {

    const { amountSetting } = props

    //貯金額Form
    const [goalAmount, setGoalAmount] = useState("");
    const [fixIncome, setFixIncome] = useState("");
    const [fixExpenditure, setFixExpenditure] = useState("");
    const [goalAmountString, setGoalAmountString] = useState('');
    const [fixIncomeString, setFixIncomeString] = useState('');
    const [fixExpenditureString, setFixExpenditureString] = useState('');

    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== ""){
            setGoalAmount(e.target.value)
            setGoalAmountString(e.target.valueAsNumber.toLocaleString())
        } else {
            setGoalAmount("")
            setGoalAmountString("0")
        }
    };
    const onChangeFixIncome = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== ""){
            setFixIncome(e.target.value);
            setFixIncomeString(e.target.valueAsNumber.toLocaleString())
        } else {
            setFixIncome("")
            setFixIncomeString("0")
        }
    }
    const onChangeFixExpenditure = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== ""){
            setFixExpenditure(e.target.value);
            setFixExpenditureString(e.target.valueAsNumber.toLocaleString())
        } else {
            setFixExpenditure("")
            setFixExpenditureString("0")
        }
    }

    const requestForm = { "goalAmount": goalAmount, "fixIncome": fixIncome, "fixExpenditure": fixExpenditure }
    const { saveAmountAction } = useSetting();


    useEffect(() => {
        if (amountSetting) {
            setGoalAmount(amountSetting.saveAmount)
            setFixIncome(amountSetting.fixedIncome)
            setFixExpenditure(amountSetting.fixedExpenditure)
            setGoalAmountString(amountSetting.saveAmount.toLocaleString())
            setFixIncomeString(amountSetting.fixedIncome.toLocaleString())
            setFixExpenditureString(amountSetting.fixedExpenditure.toLocaleString())

        }else {
            setGoalAmount("")
            setFixIncome("")
            setFixExpenditure("")
        }
    }, [amountSetting])

    const onClickSetting = () => {
        saveAmountAction(requestForm);
    }

    return (
        <>
            <Stack spacing={4} px={10} py={3}>
                <FormLabel htmlFor="amount">目標貯金額({goalAmountString}円)</FormLabel>
                <Input id="amount" placeholder="" value={goalAmount} onChange={onChangeAmount} type="number" />
                <FormLabel htmlFor="amount">固定収入({fixIncomeString}円)</FormLabel>
                <Input id="amount" placeholder="" value={fixIncome} onChange={onChangeFixIncome} type="number" />
                <FormLabel htmlFor="amount">固定支出({fixExpenditureString}円)</FormLabel>
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