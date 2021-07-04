import React, {useState} from "react";
import {Alert, Platform} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

import AppleSvg from '../../assets/icons/apple.svg';
import GoogleSvg from '../../assets/icons/google.svg';
import LogoSvg from '../../assets/icons/logo.svg';

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SingInTitle,
    Footer,
    FooterWrapper,
    Loading
} from "./styles";
import {SocialButton} from "../../components/Form/SocialButton";

import {useAuth} from "../../hooks/auth";

export function SingIn() {
    const {signWithGoogle, singWithApple} = useAuth()
    const [isLoading, setIsLoading] = useState(false);

    async function handleSignWithGoogle() {
        try {
            setIsLoading(true);
            return await signWithGoogle();
        } catch (error) {
            setIsLoading(false);
            console.log(error)
            Alert.alert('Não foi possivel conectar com a conta google')
        }
    }

    async function handleSignWithApple() {
        try {
            setIsLoading(true);
            return await singWithApple();
        } catch (error) {
            setIsLoading(false);
            console.log(error)
            Alert.alert('Não foi possivel conectar com a conta apple')
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>Controle suas {'\n'} finanças de forma {'\n'} muito simples</Title>
                    <SingInTitle>Faça seu login com {'\n'} uma das contas abaixo</SingInTitle>
                </TitleWrapper>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SocialButton label="Entrar com Google" svg={GoogleSvg} onPress={handleSignWithGoogle}/>
                    { Platform.OS === 'ios' && (<SocialButton label="Entrar com Apple" svg={AppleSvg} onPress={handleSignWithApple}/>) }
                </FooterWrapper>

                {isLoading && (<Loading size="small" color="#FFF"/>)}
            </Footer>
        </Container>
    );
}
