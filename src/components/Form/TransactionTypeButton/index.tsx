import React from "react";
import {RectButtonProps} from "react-native-gesture-handler";

import {Container, ButtonWrapper, Label, Icon} from "./styles";

interface Props extends RectButtonProps {
    label: string,
    type: 'up' | 'down',
    isActive: boolean
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

export function TransactionTypeButton({label, type, isActive, ...rest} : Props) {
    return (
        <Container
            isActive={isActive}
            type={type}>
            <ButtonWrapper {...rest}>
                <Icon name={icon[type]} type={type}/>
                <Label>{label}</Label>
            </ButtonWrapper>
        </Container>
    );
}
