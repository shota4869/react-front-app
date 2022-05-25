import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, IconButton } from "@chakra-ui/react"
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ReactNode, VFC } from "react";
import "../styles/data-table.css"

type Props = {
    onOpen: () => void,
    children: ReactNode
}

export const BalanceTable: VFC<Props> = (props) => {

    const { onOpen, children } = props;

    const onOpenModal = () => {
        onOpen();
    }
    const date = new Date()


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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                        <Td>{date.toLocaleDateString()}</Td>
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
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
                    <Tr>
                        <Td>{date.toLocaleDateString()}</Td>
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
        </TableContainer >
    )
}