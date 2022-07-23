import { Button } from "@chakra-ui/react";
import { memo,  ReactNode,  VFC } from "react";

type Props = {
    onClick: () => void,
    children: ReactNode
}

export const SaveButton: VFC<Props> = memo((props) => {
    const { onClick, children } = props;
    return (
        <Button size={"sm"} bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick}>{children}</Button>
    )
});