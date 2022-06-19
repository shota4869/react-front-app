import { Accordion, AccordionButton, Container} from "@chakra-ui/react"
import {  memo, useEffect } from "react";
import { Header } from "../organisms/layout/Header";


import { useSetting } from "../../hooks/useSetting";

import { SettingForms } from "../organisms/layout/SettingForms";



export const Setting = memo(() => {

    const { init } = useSetting();
    
    const date = new Date();

    useEffect(() => {
        init();

    }, [init])

    return (
        <>
            <Header />
            <Container maxW="800px" my={4}>
                <SettingForms />
            </Container>
        </>
    )
})