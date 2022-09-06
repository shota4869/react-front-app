import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, IconButton, Tooltip } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons";
import { memo,  ReactNode,  VFC } from "react";
import "../styles/data-table.css"
import { balance } from "../../type/api/balance"

type Props = {
    balanceList: Array<balance>,
    children: ReactNode,
    deleteAction: (id: string,req:string,fixFlg:string) => void,
    req: string
}

export const BalanceTable: VFC<Props> = memo((props) => {

    const {  balanceList, children,deleteAction , req} = props;
    
    const onClickDelete = (id: string, fixFlg: string) => {
        deleteAction(id,req,fixFlg);
    }

    return (
        <>
        <TableContainer overflowY="auto" maxHeight="550px">
            <Table id="table" size={"sm"}>
                <Thead bgColor="telegram.300" className="thead_fix" >
                    <Tr>
                        <Th fontSize={{ base: "xs", md: "sm" }} color="gray.50" pr={5}>日付</Th>
                        <Th fontSize={{ base: "xs", md: "sm" }} color="gray.50" pr={5}>種別</Th>
                        <Th fontSize={{ base: "xs", md: "sm" }} color="gray.50" pr={5}>カテゴリー</Th>
                        <Th fontSize={{ base: "xs", md: "sm" }} color="gray.50" pr={5}>{children}</Th>
                        <Th fontSize={{ base: "xs", md: "sm" }} color="gray.50" pr={5}>備考</Th>
                        <Th fontSize={{ base: "xs", md: "sm" }} color="gray.50" pr={5}>削除</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {balanceList.map((balance) =>
                        <Tr _hover={{ bg: "orange.100" }} key={balance['id']}>
                            <Td fontSize={{ base: "xs", md: "sm" }}>{balance['date']}</Td>
                            <Td fontSize={{ base: "xs", md: "sm" }}>{balance['balanceName']}</Td>
                            <Td fontSize={{ base: "xs", md: "sm" }}>{balance['categoryName']}</Td>
                            <Td isNumeric fontSize={{ base: "xs", md: "sm" }}>{balance['amount'].toLocaleString()}円</Td>
                            <Td fontSize={{ base: "xs", md: "sm" }}>
                                <Tooltip label={balance['remarks']}>
                                    <div>{balance['remarks']}</div>
                                </Tooltip>
                            </Td>
                            <Td fontSize={{ base: "xs", md: "sm" }}>
                                <IconButton aria-label="削除" icon={<DeleteIcon />} size="sm" variant="unstyled" onClick={() => onClickDelete(balance['id'],balance["fixFlg"])} />
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer >
        </>
    )
})