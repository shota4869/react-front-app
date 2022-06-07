import { Tabs, TabList, Tab, TabPanels, TabPanel,  Flex } from "@chakra-ui/react"
import { memo, VFC } from "react";
import { DonutsChart } from "../../atoms/graphs/DonutsChart";
import { BalanceTable } from "../../molucules/BalanceTable";

type Props = {
    onOpen: () => void,
    incomeList: never[],
    expenditureList: never[]
}

export const BalanceTableTab: VFC<Props> = memo((props) => {

    const { onOpen ,incomeList ,expenditureList} = props;

    const onOpenModal = () => {
        onOpen();
    }

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels fontSize={{ base: "sm", md: "md" }} padding={{ base: 2, md: 3 }}>
                <TabPanel>
                    <DonutsChart />
                    <BalanceTable onOpen={onOpen} balanceList={expenditureList}>支出</BalanceTable>
                </TabPanel>
                <TabPanel>
                    <Flex align="center" justify="space-between">
                        <DonutsChart />
                    </Flex>
                    <BalanceTable onOpen={onOpen} balanceList={incomeList}>収入</BalanceTable>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
})