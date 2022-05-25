import { Tab, TabList, TabPanel, TabPanels, Tabs, Heading } from "@chakra-ui/react"
import { VFC } from "react"
import { RegistForm } from "../../molucules/RegistForm"

type Props ={
    incomeArry: never[],
    expenditureArry:never[]
}

export const RegistFormTab: VFC <Props> = (props) => {
    const {incomeArry,expenditureArry} = props;

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">支出入力</Heading>
                    <RegistForm selectArry={expenditureArry}/>
                </TabPanel>
                <TabPanel>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">収入入力</Heading>
                    <RegistForm selectArry={incomeArry}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}