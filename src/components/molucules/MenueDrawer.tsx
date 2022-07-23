import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUserSetting:() => void;
    onClickCalendar:() => void;
    onClickLogout: () => void;
}

export const MenueDrawer: VFC<Props> = memo((props) => {
    const { isOpen, onClose,onClickHome, onClickUserSetting,onClickCalendar,onClickLogout} = props;


    return (
        <>
            <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody p={0} bg="gray.100">
                            <Button w="100%" onClick={onClickHome}>TOP</Button>
                            <Button w="100%" onClick={onClickCalendar}>カレンダー</Button>
                            <Button w="100%" onClick={onClickUserSetting}>設定</Button>
                            <Button w="100%" onClick={onClickLogout}>ログアウト</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )

});