import React from "react";

import {Wrapper, Category, Icon} from "./styles";

interface Props {
    title: string;
    onPress: () => void;
}

export function CategorySelectButton({title, onPress} : Props) {
    return (
        <Wrapper onPress={onPress}>
            <Category title={title}>{title}</Category>
            <Icon name="chevron-down"/>
        </Wrapper>
    );
}
