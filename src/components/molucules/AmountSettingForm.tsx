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
    const [goalAmountString, setGoalAmountString] = useState('');

    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== ""){
            setGoalAmount(e.target.value)
            setGoalAmountString(e.target.valueAsNumber.toLocaleString())
        } else {
            setGoalAmount("")
            setGoalAmountString("0")
        }
    };

    const requestForm = { "goalAmount": goalAmount}
    const { saveAmountAction } = useSetting();


    useEffect(() => {
        if (amountSetting) {
            setGoalAmount(amountSetting.saveAmount)
            setGoalAmountString(amountSetting.saveAmount.toLocaleString())
        }else {
            setGoalAmount("")
            setGoalAmountString("0")
        }
    }, [amountSetting])

    const onClickSetting = () => {
        saveAmountAction(requestForm);
    }

    return (
        <>
            <Stack spacing={4} px={10} py={3}>
                <FormLabel htmlFor="amount" fontSize={{ base: "xs", md: "sm" }}>目標貯金額({goalAmountString}円)</FormLabel>
                <Input id="amount" placeholder="" value={goalAmount} onChange={onChangeAmount} type="number" size={"sm"} fontSize={{ base: "xs", md: "sm" }} />
                <Flex justify="center" >
                    <Box py={4}>
                        <SaveButton onClick={onClickSetting}>設定</SaveButton>
                    </Box>
                </Flex>
            </Stack>
        </>
    )


})