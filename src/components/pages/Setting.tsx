import { Box, Container, Flex,  FormLabel, Input, Stack, Switch } from "@chakra-ui/react"
import { ChangeEvent,  memo,  useEffect,  useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Header } from "../organisms/layout/Header";
import ja from "date-fns/locale/ja";

import { SaveButton } from "../atoms/button/SaveButton" 
import { useSetting } from "../../hooks/useSetting";

import { useSaveSetting } from "../../hooks/useSaveSetting";



export const Setting = memo(() => {

    //Form
    const [firtsAmount, setFirstAmount] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [lineFlg, setLineFlg] = useState(false);
    const [goalDate, setGoalDate] = useState<Date | null>();

    const requestForm = {"firstAmount":firtsAmount,"goalAmount": goalAmount,"goalDate": goalDate,"lineFlg": lineFlg, "accessToken": accessToken} 
    const { init } = useSetting();
    const { saveAction } = useSaveSetting(); 


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setGoalAmount(e.target.value);
    const onChangeInitAmount = (e: ChangeEvent<HTMLInputElement>) => setFirstAmount(e.target.value);
    const onChangeAccessToken = (e: ChangeEvent<HTMLInputElement>) => setAccessToken(e.target.value);
    const onChangeLineFlg = () => setLineFlg(!lineFlg);

    const onClickSetting = () => {
        saveAction(requestForm)
    } 

    useEffect(() =>{
        init();

    },[init])

    return (
        <>
            <Header />
            <Container maxW="600px">
                <Stack spacing={4} px={10} py={3}>
                    <FormLabel htmlFor="amount">初期残高</FormLabel>
                    <Input id="amount" placeholder="" value={goalAmount} onChange={onChangeInitAmount} type="number" />
                    <FormLabel htmlFor="goalamount">目標貯金額</FormLabel>
                    <Input id="goalamount" placeholder="" value={firtsAmount} onChange={onChangeAmount} type="number" />
                    <FormLabel htmlFor="date">目標貯金日付</FormLabel>
                    <ReactDatePicker id="date" dateFormat="yyyy/MM/dd" autoComplete="off" selected={goalDate} onChange={selectedDate => { setGoalDate(selectedDate || null) }} locale={ja} />
                    <FormLabel htmlFor='email-alerts' mb='0'>ライン連携有無</FormLabel>
                    <Switch id='email-alerts' isChecked={lineFlg} onChange={onChangeLineFlg} />
                    <FormLabel htmlFor="token">アクセストークン</FormLabel>
                    <Input id="token" placeholder="" value={accessToken} onChange={onChangeAccessToken} disabled={!lineFlg} />
                    <Flex justify="center" >
                        <Box py={4}>
                            <SaveButton onClick={onClickSetting}>設定</SaveButton>
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
})