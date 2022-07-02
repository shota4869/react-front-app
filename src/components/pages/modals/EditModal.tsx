import { Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { ChangeEvent, useState, VFC } from "react";

type Props = {
    onClose: () => void,
    isOpen: boolean
}


export const EditModal: VFC<Props> = (props) => {

    const { isOpen, onClose } = props;
    const [amount, setAmount] = useState('');


    const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);


    const onClickEvent = () => {
        alert("Hi")
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">カテゴリー追加</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <FormLabel>カテゴリー名</FormLabel>
                        <Input placeholder="" value={amount} onChange={onChangeAmount} />
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