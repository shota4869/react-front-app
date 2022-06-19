import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, IconButton, Tooltip } from "@chakra-ui/react"
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { memo, ReactNode, useState, VFC } from "react";
import "../styles/data-table.css"

type Props = {
    onOpen: () => void,
    balanceList: never[],
    children: ReactNode
}

export const BalanceTable: VFC<Props> = memo((props) => {

    const { onOpen, balanceList, children } = props;


    const onOpenModal = () => {
        onOpen();
    }

    const onClickRow = () => {
        alert("hi")
    }

    return (
        <TableContainer overflowY="auto" maxHeight="450px">
            <Table >
                <Thead bgColor="telegram.300" className="thead_fix" >
                    <Tr>
                        <Th fontSize="sm" color="gray.50" pr={5}>日付</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>カテゴリー</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>{children}</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>備考</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>編集</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>削除</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {balanceList.map((balance) =>
                        <Tr onClick={onClickRow} _hover={{ bg: "orange.100" }} key={balance['id']}>
                            <Td textAlign={"center"} w="1">{balance['date']}</Td>
                            <Td>{balance['categoryName']}</Td>
                            <Td isNumeric>{balance['amount']}円</Td>
                            <Td >
                                <Tooltip label={balance['remarks']}>
                                    <div>{balance['remarks']}</div>
                                </Tooltip>
                            </Td>
                            <Td >
                                <IconButton aria-label="削除" icon={<EditIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                            </Td>
                            <Td >
                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer >
    )
})