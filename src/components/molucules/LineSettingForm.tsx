import { Box, Flex, FormLabel, Input, Stack, Switch } from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { useSetting } from "../../hooks/useSetting";
import { SaveButton } from "../atoms/button/SaveButton";
import { lineSetting } from "../../type/api/lineSetting";

type Props = {
    lineSetting: lineSetting | null
}
export const LineSettingForm: VFC<Props> = memo((props) => {

    const { lineSetting } = props

    //ライン通知設定Form
    const [accessToken, setAccessToken] = useState('');
    const [lineFlg, setLineFlg] = useState(false);

    const onChangeAccessToken = (e: ChangeEvent<HTMLInputElement>) => setAccessToken(e.target.value);
    const onChangeLineFlg = () => setLineFlg(!lineFlg);

    const { saveLineAction } = useSetting();
    const requestForm = {"accessToken": accessToken,"lineFlg": lineFlg ? "1" :"0"}
    
    useEffect(() => {
        if(lineSetting){
          setAccessToken(lineSetting.accessToken);
            if(lineSetting.lineFlg === "0"){
                setLineFlg(false);
            } else { 
                setLineFlg(true);
            }
        }
    },[lineSetting])


    const onClickSetting = () =>{
        saveLineAction(requestForm)
    }

    return (
        <>
            <Stack spacing={4} px={10} py={3}>
                <FormLabel htmlFor='email-alerts' mb='0' fontSize={{ base: "xs", md: "sm" }}>ライン連携有無</FormLabel>
                <Switch id='email-alerts' isChecked={lineFlg} onChange={onChangeLineFlg} size={"sm"} />
                <FormLabel htmlFor="token" fontSize={{ base: "xs", md: "sm" }}>アクセストークン</FormLabel>
                <Input id="token" placeholder="" value={accessToken} onChange={onChangeAccessToken} disabled={!lineFlg} size={"sm"} fontSize={{ base: "xs", md: "sm" }}/>
                <Flex justify="center" >
                    <Box py={4}>
                        <SaveButton onClick={onClickSetting}>設定</SaveButton>
                    </Box>
                </Flex>
            </Stack>
        </>
    )
})