import { Tabs, TabList, Tab, TabPanels, TabPanel,  Flex } from "@chakra-ui/react"
import { memo, useEffect, VFC } from "react";
import { useBalanceList } from "../../../hooks/useBalanceList";
import { DonutsChart } from "../../atoms/graphs/DonutsChart";
import { BalanceTable } from "../../molucules/BalanceTable";

type Props = {

    requestJson: string
}

export const BalanceTableTab: VFC<Props> = memo((props) => {

    const { requestJson } = props;

    const {findBalanceList, deleteAction,incomeList,expenditureList } = useBalanceList();

    useEffect(() => {
        findBalanceList(requestJson)
        console.log("★"+incomeList)
    },[findBalanceList])

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels fontSize={{ base: "sm", md: "md" }} padding={{ base: 2, md: 3 }}>
                <TabPanel>
                    <DonutsChart />
                    <BalanceTable  balanceList={expenditureList} deleteAction={deleteAction} findBalanceList={findBalanceList} req={requestJson}>支出</BalanceTable>
                </TabPanel>
                <TabPanel>
                        <DonutsChart />
                    <BalanceTable balanceList={incomeList} deleteAction={deleteAction} findBalanceList={findBalanceList} req={requestJson}>収入</BalanceTable>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
})