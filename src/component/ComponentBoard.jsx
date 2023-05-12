import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './common/Button';
import Text from './common/Text';
import Select from './common/Select';
import Input from './common/Input';
import Modal from './common/Modal';
import Table from './common/table/Table';

const optionData = [
    "옵션1",
    "옵션2",
    "옵션3",
    "옵션4",
    "옵션5",
]

const tableData = {
    tableHead : [
        "번호",
        "제목",
        "이름",
        "날짜"
    ],
    colWidthList : [
        "20%",
        "40%",
        "20%",
        "20%",
    ],
    sortableColumn : [
        "Y",
        "N",
        "N",
        "Y"
    ],
    tableBody : [
        {
            seq : 4,
            title: "제목4",
            userName: "작성자4",
            writeDate: "2023-05-08"
        },
        {
            seq : 1,
            title: "제목",
            userName: "작성자",
            writeDate: "2023-05-08"
        },
        {
            seq : 2,
            title: "제목2",
            userName: "작성자2",
            writeDate: "2023-05-08"
        },
        {
            seq : 3,
            title: "제목3",
            userName: "작성자3",
            writeDate: "2023-05-08"
        },
    ],
}

const ComponentBoard = () => {
    const [message, setMessage] = useState("");
    const [modalOn, setModalOn] = useState(false);

    const handleModalOn = (e) => {
        setModalOn(true);
    }

    useEffect(()=> {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
            setMessage(message);
            });
    }, []);

    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: '#228be6',
                    gray: '#495057',
                    pink: '#f06595',
                    black: '#000000'
                }
            }}
        >
            <Button
                color={"black"}
                padding={"5px 10px"}
                onClick={handleModalOn}
            >BUTTON</Button>
            <Text 
                tag={"div"}
                >{message}</Text>
            <Select
                width={"200px"}
                height={"2rem"}
                optionData = {optionData}
            ></Select>
            <Input
                initial={"title"}
                value={"initialValue"}
                readOnly
            />
            {modalOn && <Modal
                title={"조회하기"}
                confirmText={"확인"}
                cancelText={"취소"}
                setModalOn={setModalOn}
            >조회할 내용을 선택하거나 입력하세요</Modal>}
            <Table
                data={tableData}
                width={"1000px"}
                border={"1px solid rgba(0,0,0,.5)"}
            ></Table>
        </ThemeProvider>
    );
};

export default ComponentBoard;