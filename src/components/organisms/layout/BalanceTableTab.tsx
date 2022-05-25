import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, Box, Flex } from "@chakra-ui/react"
import { VFC } from "react";
import { DonutsChart } from "../../atoms/graphs/DonutsChart";
import { BalanceTable } from "../../molucules/BalanceTable";

type Props = {
    onOpen: () => void
}

export const BalanceTableTab: VFC<Props> = (props) => {

    const { onOpen } = props;

    const onOpenModal = () => {
        onOpen();
    }

    return (
        <Tabs isFitted isManual variant='enclosed'>
            <TabList>
                <Tab>支出</Tab>
                <Tab>収入</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <DonutsChart />
                    <BalanceTable onOpen={onOpen}>支出</BalanceTable>
                </TabPanel>
                <TabPanel>
                    <Flex align="center" justify="space-between">
                        <DonutsChart />
                    </Flex>
                    <BalanceTable onOpen={onOpen}>収入</BalanceTable>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}