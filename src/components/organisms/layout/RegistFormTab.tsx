import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useContext, VFC } from "react"
import { RegistForm } from "../../molucules/RegistForm"
import { homeForm } from "../../../type/api/homeForm"
import { IncomeCategoryListContext } from "../../../providers/IncomeCategoryListProvider"
import { ExpenditureCategoryListContext } from "../../../providers/ExpenditureCategoryListProvider"


type Props ={
    saveAction: (form: homeForm) => void,
    headerWord: string,
    index: number,
    fixFlg: string
}

export const RegistFormTab: VFC <Props> = (props) => {
    const {  saveAction ,headerWord ,index,fixFlg} = props;

    const { incomeCategory } = useContext(IncomeCategoryListContext);
    const { expenditureCategory } = useContext(ExpenditureCategoryListContext);

    return (
        <Tabs isFitted isManual variant='enclosed'  defaultIndex={index}>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <RegistForm categoryArry={expenditureCategory} balanceFlg={1} saveAction={saveAction} fixFlg={fixFlg}>{headerWord}支出</RegistForm>
                </TabPanel>
                <TabPanel>
                    <RegistForm categoryArry={incomeCategory} balanceFlg={0} saveAction={saveAction} fixFlg={fixFlg}>{headerWord}収入</RegistForm>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}