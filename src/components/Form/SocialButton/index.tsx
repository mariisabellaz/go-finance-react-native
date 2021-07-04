import React from "react";
import {RectButtonProps} from "react-native-gesture-handler";
import {SvgProps} from "react-native-svg";

import {Wrapper, Label, ImageContainer} from "./styles";

interface Props extends RectButtonProps {
    label: string;
    svg: React.FC<SvgProps>
}

export function SocialButton({label, svg: Svg, ...rest} : Props) {
    return (
        <Wrapper {...rest}>
            <ImageContainer>
                <Svg/>
            </ImageContainer>
            <Label>{label}</Label>
        </Wrapper>
    );
}
