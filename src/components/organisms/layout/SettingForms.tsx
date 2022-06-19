import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { AmountSettingForm } from "../../molucules/AmountSettingForm";
import { LineSettingForm } from "../../molucules/LineSettingForm";

export const SettingForms: VFC = memo(() => {


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
                                <AmountSettingForm />
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
                            <LineSettingForm />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
        </>
    )
})