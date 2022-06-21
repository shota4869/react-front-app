import { Tab, TabList, TabPanel, TabPanels, Tabs, Heading } from "@chakra-ui/react"
import { VFC } from "react"
import { RegistForm } from "../../molucules/RegistForm"
import { homeForm } from "../../../type/api/homeForm"


type Props ={
    incomeArry: never[],
    expenditureArry:never[],
    userId: Number,
    saveAction: (form: homeForm) => void,
    init: () => void
}

export const RegistFormTab: VFC <Props> = (props) => {
    const {incomeArry,expenditureArry, userId, saveAction , init} = props;

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">支出入力</Heading>
                    <RegistForm categoryArry={expenditureArry} userId={userId} balanceFlg={1} saveAction={saveAction} init={init}/>
                </TabPanel>
                <TabPanel>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">収入入力</Heading>
                    <RegistForm categoryArry={incomeArry} userId={userId} balanceFlg={0} saveAction={saveAction} init={init}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}