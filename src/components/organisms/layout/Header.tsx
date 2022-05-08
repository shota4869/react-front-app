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
    const onClickUsermanagement = useCallback(() => navigate("/home/user_management"), [navigate]);
    const onClickSetting = useCallback(() => navigate("/home/setting"), [navigate]);
    const onClickLogout = useCallback(() => {
        logout(navigate)
    },[navigate]);



    return (
        <>
            <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>健康管理アプリ</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link onClick={onClickUsermanagement}>トレーニング一覧</Link>
                    </Box>
                    <Box pr={4}>
                        <Link onClick={onClickSetting}>設定</Link>
                    </Box>
                </Flex>
                <Flex>
                    <Box pr={4}>
                        <Link onClick={onClickLogout}>ログアウト</Link>
                    </Box>
                </Flex>
                <MenueIconButton onOpen={onOpen} />
            </Flex>
            <MenueDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} onClickUsermanagement={onClickUsermanagement} onClickSetting={onClickSetting} />
        </>
    )
})