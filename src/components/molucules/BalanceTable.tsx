import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, IconButton, Tooltip, useDisclosure } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons";
import { memo,  ReactNode, useEffect,  useLayoutEffect,  VFC } from "react";
import "../styles/data-table.css"
import { balance } from "../../type/api/balance"

type Props = {
    balanceList: Array<balance>,
    children: ReactNode,
    deleteAction: (id: string,req:string) => void,
    getBalanceList:(req: string) => void,
    req: string
}

export const BalanceTable: VFC<Props> = memo((props) => {

    const {  balanceList, children,deleteAction ,getBalanceList, req} = props;
    
    const onClickDelete = (id: string) => {
        deleteAction(id,req);
    }

    useLayoutEffect(() => {
        console.log("hi")
    },[])

    return (
        <>
        <TableContainer overflowY="auto" maxHeight="550px">
            <Table id="table">
                <Thead bgColor="telegram.300" className="thead_fix" >
                    <Tr>
                        <Th fontSize="sm" color="gray.50" pr={5}>日付</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>カテゴリー</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>{children}</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>備考</Th>
                        <Th fontSize="sm" color="gray.50" pr={5}>削除</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {balanceList.map((balance) =>
                        <Tr _hover={{ bg: "orange.100" }} key={balance['id']}>
                            <Td>{balance['date']}</Td>
                            <Td>{balance['categoryName']}</Td>
                            <Td isNumeric>{balance['amount'].toLocaleString()}円</Td>
                            <Td >
                                <Tooltip label={balance['remarks']}>
                                    <div>{balance['remarks']}</div>
                                </Tooltip>
                            </Td>
                            <Td >
                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={() => onClickDelete(balance['id'])} />
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer >
        </>
    )
})