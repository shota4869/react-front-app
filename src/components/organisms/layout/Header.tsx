import { memo, useCallback, VFC } from "react"
import { Box, Button, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react"

import { MenueIconButton } from "../../atoms/button/MenueIconButton";
import { MenueDrawer } from "../../molucules/MenueDrawer";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";


type Props = {
    user: string
}

export const Header: VFC = memo(() => {


    // const { user } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { logout } = useLogout();

    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate("/home"), [navigate]);
    const onClickUsermanagement = useCallback(() => navigate("/transition"), [navigate]);
    const onClickCalender = useCallback(() => navigate("/calender"), [navigate]);
    const onClickLogout = () => {
        logout(navigate)
    };



    return (
        <>
            <Flex as="nav" bg="orange.300" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>貯金ちゃん</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>

                    <Box pr={4}>
                        <Link onClick={onClickCalender}>カレンダー</Link>
                    </Box>
                    <Box pr={4}>
                        <Link onClick={onClickUsermanagement}>レポート</Link>
                    </Box>
                </Flex>
                <Flex display={{ base: "none", md: "flex" }}>
                    <Menu closeOnSelect={false} autoSelect={false}>
                        <MenuButton as={IconButton} fontSize="lg" bg="orange.300" _hover={{ bg: "orange.200" }} icon={<HamburgerIcon />} />
                        {/* </MenuButton> */}
                        <MenuList bg="black" >
                            <MenuItem _hover={{ bg: "gray.400" }}>設定</MenuItem>
                            <MenuItem onClick={onClickLogout} _hover={{ bg: "gray.400" }}> ログアウト</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <MenueIconButton onOpen={onOpen} />
            </Flex>
            <MenueDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} onClickUsermanagement={onClickUsermanagement} onClickSetting={onClickCalender} />
        </>
    )
})