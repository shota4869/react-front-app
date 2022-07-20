import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { AmountSettingForm } from "../../molucules/AmountSettingForm";
import { LineSettingForm } from "../../molucules/LineSettingForm";
import { lineSetting } from "../../../type/api/lineSetting";
import { amountSetting } from "../../../type/api/amountSetting";
import { RegistFormTab } from "./RegistFormTab"
import { homeForm } from "../../../type/api/homeForm";



type Props = {
    saveBalanceAction: (form: homeForm) => void,
    amountSetting: amountSetting | null,
    lineSetting: lineSetting | null,
    incomeAmount: number,
    expenditureAmount: number
}
export const SettingForms: VFC<Props> = memo((props) => {

    const { saveBalanceAction, lineSetting, amountSetting,incomeAmount, expenditureAmount} = props

    const date = new Date();


    return (
        <>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                今月({date.toLocaleDateString().substring(0, 6)})の目標貯金額設定
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <AmountSettingForm amountSetting={amountSetting} />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                今月({date.toLocaleDateString().substring(0, 6)})の固定収支設定
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">固定収入合計：{incomeAmount.toLocaleString()}円</Heading>
                        <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">固定支出合計：{expenditureAmount.toLocaleString()}円</Heading>
                        <RegistFormTab saveAction={saveBalanceAction} headerWord={"固定"} index={1} fixFlg={"1"} />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                ライン通知設定
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <LineSettingForm lineSetting={lineSetting} />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
})