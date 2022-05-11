import { VFC, memo } from "react"
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button, IconButton, Stack, Box } from "@chakra-ui/react"
import { HeaderLayout } from "../templete/HeaderLayout"
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { DonutsChart } from "../atoms/graphs/DonutsChart";



export const BalanceOfPaymentList: VFC = memo(() => {


    const navigate = useNavigate();

    const onOpen = () => {
        navigate("../edit")
    }


    const date = new Date();

    return (
        <>
            <HeaderLayout />
            <Stack spacing={4} px={4} py={5}>
            <Box>日付：{new Date().toLocaleDateString()}</Box>
                <TableContainer>
                    <Table>
                        <Thead bgColor="telegram.300" >
                            <Tr>
                                <Th fontSize="mg" color="gray.50" pr={5}>用途</Th>
                                <Th fontSize="mg" color="gray.50" pr={5}>収支</Th>
                                <Th fontSize="mg" color="gray.50">備考</Th>
                                <Th fontSize="mg" color="gray.50">アクション</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>食事</Td>
                                <Td isNumeric>2568円</Td>
                                <Td >昼飯代</Td>
                                <Td >
                                    <Button bgColor="blue.300">更新</Button>
                                    <Button bgColor="red.300">削除</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>買い物</Td>
                                <Td isNumeric>4562円</Td>
                                <Td >洋服</Td>
                                <Td >
                                    <Button bgColor="blue.300">更新</Button>
                                    <Button bgColor="red.300">削除</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>交通費</Td>
                                <Td isNumeric>800円</Td>
                                <Td >早稲田から鎌倉</Td>
                                <Td >
                                    <Button bgColor="blue.300">更新</Button>
                                    <Button bgColor="red.300">削除</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Td>
                                    <IconButton aria-label="追加" icon={<AddIcon />} size="sm" variant="unstyled" onClick={onOpen} />
                                </Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
                <DonutsChart />
            </Stack>
        </>
    )
})