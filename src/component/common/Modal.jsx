import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Text from './Text';

const optionData = [
    '부적절한 게시글',
    '욕설',
    '그냥신고',
    '어쩔수없다'
]

const DarkBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.8);
    z-index: 100;
`;

const ModalBox = styled.div`
    position: relative;
    width: ${props => props.width || "40%"};
    height: ${props => props.height || "40%"};
    padding: 20px;
    background: white;
    border-radius: 5px;
    z-index: 101;
`;

const ExitButton = styled.button`
    position: absolute;
    top: 15px;
    right: 0px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1;
`

const TextGroup = styled.div`

    & > * {
        text-align: center;
    }
    & > *:nth-child(1) {
        position: relative;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    & > *:nth-child(2) {
        font-size: 16px;
        text-align: center;
        margin-bottom: 30px;
    }
`;

const SearchGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto auto 30px;

    & > *:first-child {
        margin-bottom: 10px;
    }
`;

const InputButtonGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    & > *:first-child {
        margin-right: 5px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
`;

const Modal = ({ title, children, confirmText, cancelText, setModalOn }) => {
    const modalRef = useRef([]);

    const closeModal = (e) => {
        if (modalRef.current.includes(e.target)) {
            setModalOn(false);
        }
    }

    return (
        <DarkBackground 
            onClick={closeModal} 
            ref={elem => (modalRef.current[0] = elem)}>
            <ModalBox>
                <ExitButton
                    onClick={closeModal}
                    type="button"
                    ref={elem => (modalRef.current[1] = elem)}
                >x</ExitButton>
                <TextGroup>
                    <Text 
                        tag='div'
                    >{title}</Text>
                    <Text 
                        tag='div'
                    >{children}</Text>
                </TextGroup>
                <SearchGroup>
                    <Select
                        width={"100%"}
                        height={"2rem"}
                        optionData = {optionData}
                    ></Select>
                    <InputButtonGroup>
                        <Input 
                            initial={"retrieve"}
                            width={"80%"}
                            height={"100%"}
                        />
                        <Button
                            color={"black"}
                            width={"20%"}
                        >조회</Button>
                    </InputButtonGroup>
                </SearchGroup>
                <ButtonGroup>
                    <Button
                        color={"blue"}
                        padding={"8px 20px"}
                        disabled={true}
                    >{confirmText}</Button>
                    <Button
                        color={"pink"}
                        padding={"8px 20px"}
                    >{cancelText}</Button>
                </ButtonGroup>
            </ModalBox>
        </DarkBackground>
    );
};

export default Modal;