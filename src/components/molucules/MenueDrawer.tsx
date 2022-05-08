import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUsermanagement:() => void;
    onClickSetting:() => void;
}

export const MenueDrawer: VFC<Props> = memo((props) => {
    const { isOpen, onClose,onClickHome, onClickUsermanagement,onClickSetting} = props;
    return (
        <>
            <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody p={0} bg="gray.100">
                            <Button w="100%" onClick={onClickHome}>TOP</Button>
                            <Button w="100%" onClick={onClickUsermanagement}>ユーザ一覧</Button>
                            <Button w="100%" onClick={onClickSetting}>設定</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )

});