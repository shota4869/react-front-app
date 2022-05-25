
import { Box } from "@chakra-ui/react"
import { VFC, memo } from "react"
import { MultiAxisCharts } from "../atoms/graphs/MultiAxisCharts"
import { Header } from "../organisms/layout/Header"

import { HeaderLayout } from "../templete/HeaderLayout"


export const Usermanagement: VFC = memo(() => {


    return (
        <>
            <Header />
            <Box py={10} px={5}>
                <MultiAxisCharts />
            </Box>
        </>
    )
})