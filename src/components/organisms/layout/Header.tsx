import { memo, useCallback, VFC } from "react"
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react"

import { MenueIconButton } from "../../atoms/button/MenueIconButton";
import { MenueDrawer } from "../../molucules/MenueDrawer";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";



export const Header: VFC = memo(() => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { logout } = useLogout();

    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate("/home"), [navigate]);
    const onClickUsermanagement = useCallback(() => navigate("/home/transition"), [navigate]);
    const onClickCalender = useCallback(() => navigate("/home/calender"), [navigate]);
    const onClickLogout = () => {
        logout(navigate)
    };



    return (
        <>
            <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>貯金ちゃん</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    {/* <Box pr={4}>
                        <Link onClick={onClickUsermanagement}>貯金額推移図</Link>
                    </Box> */}
                    <Box pr={4}>
                        <Link onClick={onClickCalender}>カレンダー</Link>
                    </Box>
                </Flex>
                <Flex>
                    <Box pr={4}>
                        <Link onClick={onClickLogout}>ログアウト</Link>
                    </Box>
                </Flex>
                <MenueIconButton onOpen={onOpen} />
            </Flex>
            <MenueDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} onClickUsermanagement={onClickUsermanagement} onClickSetting={onClickCalender} />
        </>
    )
})