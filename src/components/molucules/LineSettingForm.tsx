import { Box, Flex, FormLabel, Input, Stack, Switch } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useSaveLineSetting } from "../../hooks/useSaveLineSetting";
import { SaveButton } from "../atoms/button/SaveButton";

export const LineSettingForm: VFC = memo(() => {

    //ライン通知設定Form
    const [accessToken, setAccessToken] = useState('');
    const [lineFlg, setLineFlg] = useState(false);

    const onChangeAccessToken = (e: ChangeEvent<HTMLInputElement>) => setAccessToken(e.target.value);
    const onChangeLineFlg = () => setLineFlg(!lineFlg);

    const { saveAction } = useSaveLineSetting();
    const requestForm = {"accessToken": accessToken,"lineFlg": lineFlg ? "1" :"0"}

    const onClickSetting = () =>{
        saveAction(requestForm)
        console.log(requestForm)
    }

    return (
        <>
            <Stack spacing={4} px={10} py={3}>
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
        </>
    )
})