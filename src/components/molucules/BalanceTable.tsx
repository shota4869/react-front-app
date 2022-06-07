import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, IconButton } from "@chakra-ui/react"
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { memo, ReactNode,  VFC } from "react";
import "../styles/data-table.css"

type Props = {
    onOpen: () => void,
    balanceList: never[],
    children: ReactNode
}

export const BalanceTable: VFC<Props> = memo((props) => {

    const { onOpen, balanceList , children } = props;

    const onOpenModal = () => {
        onOpen();
    }

    const onClickRow = () => {
        alert("hi")
    }

    return (
        <TableContainer overflowY="auto" maxHeight="500px">
            <Table>
                <Thead bgColor="telegram.300" className="thead_fix" >
                    <Tr>
                        <Th fontSize="mg" color="gray.50" pr={5}>日付</Th>
                        <Th fontSize="mg" color="gray.50" pr={5}>カテゴリー</Th>
                        <Th fontSize="mg" color="gray.50" pr={5}>{children}</Th>
                        <Th fontSize="mg" color="gray.50">備考</Th>
                        <Th fontSize="mg" color="gray.50">編集</Th>
                        <Th fontSize="mg" color="gray.50">削除</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {balanceList.map((balance) =>
                    <Tr onClick={onClickRow} _hover={{ bg: "orange.100" }} key={balance['id']}>
                        <Td>{balance['date']}</Td>
                        <Td>{balance['categoryName']}</Td>
                        <Td isNumeric>{balance['amount']}円</Td>
                        <Td >{balance['remarks']}</Td>
                        <Td >
                            <IconButton aria-label="削除" icon={<EditIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                        </Td>
                        <Td >
                            <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                        </Td>
                    </Tr>
                    )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>
                            <IconButton aria-label="追加" icon={<AddIcon />} size="sm" variant="unstyled" onClick={onOpenModal} />
                        </Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer >
    )
})