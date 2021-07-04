import React from "react";
import {EmptyContainer, EmptyText} from "./styles";

export function EmptyTransaction() {
    return (
        <EmptyContainer>
            <EmptyText>Você ainda não tem nenhuma transação</EmptyText>
            <EmptyText>Que tal adicionar uma agora ?!</EmptyText>
        </EmptyContainer>
    );
}
