import { VFC, memo, useState, ChangeEvent, useEffect } from "react"
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Button, IconButton, Stack, Box, Tabs, TabList, Tab, TabPanels, TabPanel, Input, Flex, FormLabel, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { HeaderLayout } from "../templete/HeaderLayout"
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { DonutsChart } from "../atoms/graphs/DonutsChart";
import { RegistModal } from "./modals/RegistModal";



export const BalanceOfPaymentList: VFC = memo(() => {




    const location = useLocation()
    const [yearMonth, setYearMonth] = useState('');
    const [date, setDate] = useState("");
    const [date1, setDate1] = useState<{ date1: string, yearMonth1: string }>(location.state as { date1: string, yearMonth1: string });

    const { isOpen, onOpen, onClose } = useDisclosure()


    const onChangeYearMonth = (e: ChangeEvent<HTMLInputElement>) => setYearMonth(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

    const navigate = useNavigate();

    const onOpenModal = () => {
        onOpen();
    }

    useEffect(() => {
        if (date1) {
            if (date1.date1) {
                setDate(date1.date1)
                console.log(date1.date1)
            }
            if (date1.yearMonth1) {
                setYearMonth(date1.yearMonth1);
            }
        }
    }, [])



    return (
        <>
            <HeaderLayout />
            <Flex py={5}>
                <Box px={5}>
                    <FormLabel>年月</FormLabel>
                    <Input placeholder="yyyymm" value={yearMonth} onChange={onChangeYearMonth} id="year-month" />
                </Box>
                <Box px={5}>
                    <FormLabel>年月日</FormLabel>
                    <Input placeholder="yyyymmdd" value={date} onChange={onChangePassword} />
                </Box>
                <Box alignSelf="flex-end" px={5}>
                    <Button bgColor="teal.300" color="white">検索</Button>
                </Box>
            </Flex>
            <Stack spacing={4} px={4} py={5}>

                <Tabs isFitted isManual variant='enclosed'>
                    <TabList>
                        <Tab>支出</Tab>
                        <Tab>収入</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                <Table>
                                    <Thead bgColor="telegram.300" >
                                        <Tr>
                                            <Th fontSize="mg" color="gray.50" pr={5}>カテゴリー</Th>
                                            <Th fontSize="mg" color="gray.50" pr={5}>支出</Th>
                                            <Th fontSize="mg" color="gray.50">備考</Th>
                                            <Th fontSize="mg" color="gray.50">編集</Th>
                                            <Th fontSize="mg" color="gray.50">削除</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>食事</Td>
                                            <Td isNumeric>2568円</Td>
                                            <Td >昼飯代</Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<EditIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>

                                        </Tr>
                                        <Tr>
                                            <Td>買い物</Td>
                                            <Td isNumeric>4562円</Td>
                                            <Td >洋服</Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<EditIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>交通費</Td>
                                            <Td isNumeric>800円</Td>
                                            <Td >早稲田から鎌倉</Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<EditIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>
                                                <IconButton aria-label="追加" icon={<AddIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel>
                            <TableContainer>
                                <Table>
                                    <Thead bgColor="telegram.300" >
                                        <Tr>
                                            <Th fontSize="mg" color="gray.50" pr={5}>カテゴリー</Th>
                                            <Th fontSize="mg" color="gray.50" pr={5}>収入</Th>
                                            <Th fontSize="mg" color="gray.50">備考</Th>
                                            <Th fontSize="mg" color="gray.50">編集</Th>
                                            <Th fontSize="mg" color="gray.50">削除</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>給料</Td>
                                            <Td isNumeric>2568000円</Td>
                                            <Td >GSIから</Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<EditIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                            <Td >
                                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Td>
                                        </Tr>

                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>
                                                <IconButton aria-label="追加" icon={<AddIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                                            </Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <DonutsChart />
            </Stack>
            <RegistModal  isOpen={isOpen} onClose={onClose}/>
        </>
    )
})