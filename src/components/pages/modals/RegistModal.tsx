import { Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { ChangeEvent, useState, VFC } from "react";

type Props = {
    onClose: () => void,
    isOpen: boolean
}


export const RegistModal: VFC<Props> = (props) => {

    const { isOpen, onClose } = props;
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);


    const onClickEvent = () => {
        alert("Hi")
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">支出入力</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <FormLabel>カテゴリー</FormLabel>
                        <Input placeholder="" value={amount} onChange={onChangeAmount} />
                        <FormLabel>金額</FormLabel>
                        <Input placeholder="" value={amount} onChange={onChangeAmount} />
                        <FormLabel>年月日</FormLabel>
                        <Input placeholder="yyyymmdd" value={date} onChange={onChangePassword} />
                        <FormLabel>備考</FormLabel>
                        <Input placeholder="" value={date} onChange={onChangePassword} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            閉じる
                        </Button>
                        <Button variant='ghost' onClick={onClickEvent}>保存</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}