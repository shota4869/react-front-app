import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Stack, Switch } from "@chakra-ui/react"
import { ChangeEvent, FocusEvent, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Header } from "../organisms/layout/Header";
import ja from "date-fns/locale/ja";



export const Settings = () => {

    const [goalAmount, setGoalAmount] = useState('');
    const [initAmount, setInitAmount] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [lineFlg, setLineFlg] = useState(false);


    const today = new Date();


    const [date, setDate] = useState<Date | null>();


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setGoalAmount(e.target.value);
    const onChangeInitAmount = (e: ChangeEvent<HTMLInputElement>) => setInitAmount(e.target.value);
    const onChangeAccessToken = (e: ChangeEvent<HTMLInputElement>) => setAccessToken(e.target.value);
    const onChangeLineFlg = () => setLineFlg(!lineFlg);

    return (
        <>
            <Header />
            <Container maxW="600px">
                <Stack spacing={4} px={10} py={3}>
                    <FormLabel htmlFor="amount">初期残高</FormLabel>
                    <Input id="amount" placeholder="" value={goalAmount} onChange={onChangeInitAmount} type="number" />
                    <FormLabel htmlFor="goalamount">目標貯金額</FormLabel>
                    <Input id="goalamount" placeholder="" value={initAmount} onChange={onChangeAmount} type="number" />
                    <FormLabel htmlFor="date">目標貯金日付</FormLabel>
                    <ReactDatePicker id="date" dateFormat="yyyy/MM/dd" autoComplete="off" selected={date} onChange={selectedDate => { setDate(selectedDate || null) }} locale={ja} />
                    <FormLabel htmlFor='email-alerts' mb='0'>ライン連携有無</FormLabel>
                    <Switch id='email-alerts' isChecked={lineFlg} onChange={onChangeLineFlg} />
                    <FormLabel htmlFor="token">アクセストークン</FormLabel>
                    <Input id="token" placeholder="" value={accessToken} onChange={onChangeAccessToken} disabled={!lineFlg} />
                    <Flex justify="center" >
                        <Box py={4}>
                            <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>設定</Button>
                        </Box>
                    </Flex>

                </Stack>
            </Container>
        </>
    )
}