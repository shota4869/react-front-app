import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button } from "@chakra-ui/react"
import { VFC, memo, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"

import { HeaderLayout } from "../templete/HeaderLayout"

export const Home: VFC = memo(() => {


    const onClick = () => {
        alert("hello")
    }

    const { home } = useHome();
    const navigate = useNavigate();


    useEffect(() => {
        home(navigate);
    },[])


    return (
        <>
            <HeaderLayout />
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick}>ボタン</Button>
            <Outlet />
        </>
    )
})