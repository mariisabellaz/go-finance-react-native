import React, {useState} from "react";
import {Keyboard, Modal, TouchableWithoutFeedback, Alert} from "react-native";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {useNavigation} from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage"
import uuid from "react-native-uuid";
import * as Yup from 'yup';

import {Wrapper, Fields, Form, TransactionsTypes} from "./styles";
import {Header} from "../../components/Header";
import {Button} from "../../components/Form/Button";
import {CategorySelectButton} from "../../components/Form/CategorySelectButton";
import {TransactionTypeButton} from "../../components/Form/TransactionTypeButton";
import {Input} from "../../components/Form/InputForm";

import {CategorySelect} from "../category-select";
import {useAuth} from "../../hooks/auth";

interface FormData {
    name: string,
    amount: string
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Informa um valor númerico')
        .positive('O valor não pode ser negativo')
});

export function Register() {
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [transactionType, setTransactionType] = useState('');
    const [category, setCategory] = useState({key: 'category', name: 'Categoria'});

    const navigation = useNavigation();

    const {user} = useAuth();
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const TRANSACTIONS_KEY = `@finances:transactions_user:${user.id}`

    function handleTransactionsTypeSelect(type: 'income' | 'outcome') {
        setTransactionType(type);
    }

    function handleOpenSelectCategory() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategory() {
        setCategoryModalOpen(false);
    }

    async function onSend(form: FormData) {
        if (!transactionType)
            return Alert.alert('Selecione o tipo da transação');


        if (category.key === 'category')
            return Alert.alert('Selecione a categoria');


        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type: transactionType,
            category: category.key,
            date: new Date()
        }

        try {
            const data = await AsyncStorage.getItem(TRANSACTIONS_KEY);
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                newTransaction
            ];

            await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(dataFormatted))

            resetFields();

        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel salvar');
        }
    }

    const resetFields = () => {
        reset();
        setTransactionType('');
        setCategory({
            key: 'category',
            name: 'Categoria'
        });

        navigation.navigate('Dashboard');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Wrapper>
                <Header title="Registro"/>
                <Form>
                    <Fields>
                        <Input
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <Input
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
                        />

                        <TransactionsTypes>
                            <TransactionTypeButton
                                label="Entrada"
                                type="up"
                                onPress={() => handleTransactionsTypeSelect('income')}
                                isActive={transactionType === 'income'}
                            />
                            <TransactionTypeButton
                                label="Saída"
                                type="down"
                                onPress={() => handleTransactionsTypeSelect('outcome')}
                                isActive={transactionType === 'outcome'}
                            />
                        </TransactionsTypes>

                        <CategorySelectButton title={category.name} onPress={handleOpenSelectCategory}/>
                    </Fields>
                    <Button label="Enviar" onPress={handleSubmit(onSend)}/>
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategory}
                    />
                </Modal>
            </Wrapper>
        </TouchableWithoutFeedback>

    );
}
