import { VFC, memo, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"



export const Home: VFC = memo(() => {


    const { home, user, incomeCategory, expenditureCategory } = useHome();
    const navigate = useNavigate();


    const [id, setId] = useState<Number>(0);
    const [name, setName] = useState('');


    useEffect(() => {
        home(navigate);
        if(user!=null){
            setName(user.name)
        }
        
    },[])

    const date = new Date()

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">{name}様の貯金額:1,500,000円</Heading>
            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab incomeArry={incomeCategory} expenditureArry={expenditureCategory} userId={id}/>
            </Stack>
            <Outlet />
        </>
    )
})