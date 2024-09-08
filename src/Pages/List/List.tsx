import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { BiPlusCircle, BiCircle } from "react-icons/bi";
import { FormContainer, Label, InputContainer, Input, Button, ItemList, Item } from './List.style';

export default function List() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue.trim()) { 
            setItems([...items, inputValue]);
            setInputValue(''); 
        }
    };

    return (
        <Layout>
            <h1>Nova lista</h1>

            <FormContainer>
                <Label htmlFor="search">Adicionar item</Label>
                <InputContainer>
                    <Input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Digite o nome desejado"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Button type="button" onClick={handleClick}>
                        <BiPlusCircle size="2rem" color="#38aede" />
                    </Button>
                </InputContainer>
            </FormContainer>

            <ItemList>
                {items.map((item, index) => (
                    <Item key={index}>
                        <BiCircle size="1.5rem" color="#38aede" style={{ marginRight: '10px' }} />
                        {item}
                    </Item>
                ))}
            </ItemList>
        </Layout>
    );
}
