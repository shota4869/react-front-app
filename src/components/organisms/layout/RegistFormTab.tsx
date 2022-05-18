import { Tab, TabList, TabPanel, TabPanels, Tabs, Heading } from "@chakra-ui/react"
import { RegistForm } from "../../molucules/RegistForm"


export const RegistFormTab = () => {

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">支出入力</Heading>
                    <RegistForm />
                </TabPanel>
                <TabPanel>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">収入入力</Heading>
                    <RegistForm />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}