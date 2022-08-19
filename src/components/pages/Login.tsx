import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react"
import { VFC, memo, useState, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { login } = useAuth();

    const onClickLoginButton = () => {
        login(loginData);
    }

    const onClickRegistUser = () => {
        navigate("/regist-user");
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);


    const loginData = JSON.stringify({ 'email': email, 'password': password })

    return (

        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="dark-lg" >
                <Heading as="h1" size="lg" textAlign="center">貯金ちゃん</Heading>
                <Divider my={4} />
                <Stack spacing={4} px={4} py={10}>
                    <Input placeholder="メールアドレス" value={email} onChange={onChangeEmail} />
                    <Input placeholder="パスワード" type={'password'} value={password} onChange={onChangePassword} />
                    <PrimaryButton onClick={onClickLoginButton}>ログイン</PrimaryButton>
                    <Divider my={4} />
                    <PrimaryButton onClick={onClickRegistUser}>初めての方はこちら</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})