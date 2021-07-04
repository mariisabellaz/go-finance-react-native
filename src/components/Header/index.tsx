import React from "react";
import {Wrapper, Title} from "./styles";

interface Props {
    title: string;
}

export function Header({title} : Props) {
    return (
        <Wrapper>
            <Title>{ title }</Title>
        </Wrapper>
    );
}
