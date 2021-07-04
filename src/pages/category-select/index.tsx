import React from "react";

import {
    Wrapper,
    Category,
    CategoryIcon,
    CategoryName,
    Separator,
    CategoryList,
    Footer
} from "./styles";

import {Header} from "../../components/Header";
import {Button} from "../../components/Form/Button";

import {categories} from "../../utils/categories";

interface CategoryProps {
    key: string;
    name: string;
}

interface Props {
    category: CategoryProps,
    setCategory: (category: CategoryProps) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({category, setCategory, closeSelectCategory} : Props) {

    function handleCategorySelect(category: CategoryProps) {
        setCategory(category);
    }

    return (
        <Wrapper>
            <Header title="Category"/>
            <CategoryList
                data={categories}
                renderItem={({item}) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}>
                        <CategoryIcon name={item?.icon}/>
                        <CategoryName>{item?.name}</CategoryName>
                    </Category>
                )}
                keyExtractor={(item) => item.key}
                ItemSeparatorComponent={() => <Separator/>}
            />
            <Footer>
                <Button label="Selecionar" onPress={closeSelectCategory}/>
            </Footer>
        </Wrapper>
    );
}
