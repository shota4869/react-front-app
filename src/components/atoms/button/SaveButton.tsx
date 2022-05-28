import { Button } from "@chakra-ui/react";
import { memo,  VFC } from "react";

type Props = {
    onClick: () => void;
}

export const SaveButton: VFC<Props> = memo((props) => {
    const { onClick } = props;
    return (
        <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick}>保存</Button>
    )
});