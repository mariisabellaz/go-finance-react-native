import React from "react";
import {TextInputProps} from "react-native";

import {Container} from "./styles";

type Props = TextInputProps;

export function CommonInput({...rest} : Props) {
    return (
        <Container {...rest} placeholderTextColor="#969CB2"/>
    );
}
