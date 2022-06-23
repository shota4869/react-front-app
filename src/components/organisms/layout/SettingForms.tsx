import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { AmountSettingForm } from "../../molucules/AmountSettingForm";
import { LineSettingForm } from "../../molucules/LineSettingForm";
import { lineSetting } from "../../../type/api/lineSetting";
import { amountSetting } from "../../../type/api/amountSetting";


type Props = {
    amountSetting: amountSetting | null,
    lineSetting: lineSetting | null
}
export const SettingForms: VFC<Props> = memo((props) => {

    const { lineSetting,amountSetting } = props

    const date = new Date();

    return(
        <>
        <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    今月({date.toLocaleDateString().substring(0,6)})の貯金額設定
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                                <AmountSettingForm amountSetting={amountSetting}/>
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
                            <LineSettingForm lineSetting={lineSetting}/>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
        </>
    )
})