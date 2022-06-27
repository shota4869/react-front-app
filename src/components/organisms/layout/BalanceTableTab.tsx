import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { memo, useEffect, VFC } from "react";
import { useBalanceList } from "../../../hooks/useBalanceList";
import { BalanceTable } from "../../molucules/BalanceTable";

type Props = {

    requestJson: string
}

export const BalanceTableTab: VFC<Props> = memo((props) => {

    const { requestJson } = props;

    const {getBalanceList, deleteAction,incomeList,expenditureList } = useBalanceList();

    useEffect(() => {
        getBalanceList(requestJson)
    },[getBalanceList])

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels fontSize={{ base: "sm", md: "md" }} padding={{ base: 2, md: 3 }}>
                <TabPanel>
                    <BalanceTable  balanceList={expenditureList} deleteAction={deleteAction} getBalanceList={getBalanceList} req={requestJson}>支出</BalanceTable>
                </TabPanel>
                <TabPanel>
                    <BalanceTable balanceList={incomeList} deleteAction={deleteAction} getBalanceList={getBalanceList} req={requestJson}>収入</BalanceTable>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
})