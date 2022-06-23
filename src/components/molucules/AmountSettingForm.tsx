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
    const [goalAmount, setGoalAmount] = useState('');
    const [fixIncome, setFixIncome] = useState('');
    const [fixExpenditure, setFixExpenditure] = useState('');

    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setGoalAmount(e.target.value);
    const onChangeFixIncome = (e: ChangeEvent<HTMLInputElement>) => setFixIncome(e.target.value);
    const onChangeFixExpenditure = (e: ChangeEvent<HTMLInputElement>) => setFixExpenditure(e.target.value);

    const requestForm = { "goalAmount": goalAmount, "fixIncome": fixIncome, "fixExpenditure": fixExpenditure }
    const { saveAmountAction } = useSetting();


    useEffect(() => {
        if (amountSetting) {
            setGoalAmount(amountSetting.saveAmount)
            setFixIncome(amountSetting.fixedIncome)
            setFixExpenditure(amountSetting.fixedExpenditure)
        }
    }, [amountSetting])

    const onClickSetting = () => {
        saveAmountAction(requestForm);
    }

    return (
        <>
            <Stack spacing={4} px={10} py={3}>
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