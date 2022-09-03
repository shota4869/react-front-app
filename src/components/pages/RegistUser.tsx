import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { memo, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistUser } from "../../hooks/useRegistUser";
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const RegistUser = memo(() => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');


    const user = {'username': username, 'email': email, 'password': password ,'repassword': repassword}
    

    const navigate = useNavigate();

    const { registUser } = useRegistUser();


    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onChangeRePassword = (e: ChangeEvent<HTMLInputElement>) => setRePassword(e.target.value);

    const onClickRegistButton = () => {
        registUser(user);
    }

    const onClickReturn = () => {
        navigate("/")
    }


    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="dark-lg">
                <Heading as="h1" size="lg" textAlign="center">新規登録</Heading>
                <Divider my={4} />
                <Stack spacing={4} px={4} py={5}>
                    <Input placeholder="名前" value={username} onChange={onChangeUsername} />
                    <Input placeholder="メールアドレス" type='email' value={email} onChange={onChangeEmail} />
                    <Input placeholder="パスワード" type={'password'} value={password} onChange={onChangePassword} />
                    <Input placeholder="確認用パスワード" type={'password'} value={repassword} onChange={onChangeRePassword} />
                    <PrimaryButton onClick={onClickRegistButton}>登録</PrimaryButton>
                    <PrimaryButton onClick={onClickReturn}>戻る</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})