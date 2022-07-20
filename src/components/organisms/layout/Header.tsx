import { memo, useCallback, useContext, VFC } from "react"
import { Box, Flex, Heading, Link} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { LoginUserContext } from "../../../providers/LoginUserProvider";



export const Header: VFC = memo(() => {

    const { logout } = useLogout();

    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate("/home"), [navigate]);
    const onClickUsermanagement = useCallback(() => navigate("/setting"), [navigate]);
    const onClickCalender = useCallback(() => navigate("/calender"), [navigate]);
    const onClickLogout = () => {
        logout(navigate)
    };
    const { loginUser } = useContext(LoginUserContext);


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
                        <Link onClick={onClickUsermanagement}>設定</Link>
                    </Box>
                </Flex>
                <Flex display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link onClick={onClickLogout}>ログアウト</Link>
                    </Box>
                </Flex>
            </Flex>
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="right">おかえり、{ loginUser && loginUser.name }さん</Heading>
        </>
    )
})