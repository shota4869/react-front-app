
import { VFC, memo } from "react"
import { MultiAxisCharts } from "../atoms/graphs/MultiAxisCharts"

import { HeaderLayout } from "../templete/HeaderLayout"


export const Usermanagement: VFC = memo(() => {


    return (
        <>
            <HeaderLayout />
            <MultiAxisCharts />

            <p>貯金額推移図</p>
        </>
    )
})