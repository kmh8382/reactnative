import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const initItems = [
    { label: '아침', value: 'breakfast'},
    { label: '점심', value: 'lunch'},
    { label: '저녁', value: 'dinner'},
];

export default function MyPicker() {

    // 열린 상태
    const [ open, setOpen ] = useState(false);

    // 선택된 값
    const [ value, setValue ] = useState('');

    // 항목 리스트
    const [ items, setItems ] = useState(initItems);

    return(
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="항목 선택"
            listMode="MODAL"
        />
    );

}