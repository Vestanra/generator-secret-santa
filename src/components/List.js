import { getRandomNumber } from "helpers/getRandomNumber";
import { useState } from "react";
import { ChangeBtn, Container, Title, UlList, WrapperBtn, WrapperLists } from "./List.styled";

export const List = () => {
    const [name, setName] = useState('');
    const [members, setMembers] = useState([]);
    const [recipients, setRecipients] = useState([]);

    
    const chage = () => {
        let numbers = members.map((el, i) => i);
        const mixArr = getRandomNumber(numbers);
        const newar = mixArr.map(el => members[el]);
        setRecipients(newar);
    };

    const handleClick = () => {
        if (!name) {
            return
        }

        if (members.includes(name)) {
            return
        }

        setMembers(prevState => [...prevState, name])
        setName('')
    };

    const handleReset = () => {
        setMembers([])
        setRecipients([])
    }

    const handleChange = (e) => {
        setName(e.target.value)
    };

    return (
        <Container>
            <Title>
                Secret Santa Generator
            </Title>
            <WrapperLists>
                <UlList>
                    {members.map((el, indx) =>
                        <li key={indx}>
                            <p>{indx + 1}. <span>{el}</span></p>
                        </li>)}
                </UlList>
                <UlList>
                    {recipients.map((el, i) =>
                        <li key={i}>{members[i]} дарує {el}</li>)}
                </UlList>
            </WrapperLists>
            <WrapperBtn>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>добавити учасника</button>
                </div>
                <ChangeBtn onClick={chage}>перемішати</ChangeBtn>
                <button onClick={handleReset}>Очистити</button>
            </WrapperBtn>
        </Container>
    )
};