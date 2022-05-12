
import { VFC, memo } from "react"
import { MultiAxisCharts } from "../atoms/graphs/MultiAxisCharts"

import { HeaderLayout } from "../templete/HeaderLayout"


export const Usermanagement: VFC = memo(() => {


    return (
        <>
            <HeaderLayout />
            <MultiAxisCharts />
        </>
    )
})