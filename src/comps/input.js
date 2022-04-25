import React, { useEffect, useState } from 'react'
import Select from 'react-select'



export default function Input(props) {
    const [select1Val, setSelect1Val] = useState({});
    const [select2Val, setSelect2Val] = useState({});
    const [input, setInput] = useState(1);
    const [options, setOption] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://api.currencyapi.com/v3/latest?apikey=Z0h8AEKCgRkA2eqzRlO03vurUN6DXyd5fkHKtu69`
        let resp = await fetch(url);
        let data = await resp.json();

        let tempArr = [];
        console.log(data.data);
        for (let key in data.data) {
            tempArr.push({ value: data.data[key].value, label: data.data[key].code});
        }
        console.log(tempArr)
        setOption(tempArr);
        setSelect1Val({ value: tempArr[140].value, label:tempArr[140].label })
        setSelect2Val( {value: tempArr[60].value, label:tempArr[60].label })
    }

    useEffect(() => {
        let str1 = input + " " + select1Val.label;
        let str2 = (input / select1Val.value * select2Val.value).toLocaleString() + " " + select2Val.label;
        props.setRes([str1, str2]);
    }, [input, select1Val, select2Val])

    return (
        <div>
            <div className='d-flex'>
                <input value={input} onChange={(event) => { setInput(event.target.valueAsNumber)}} className='input_input' type='number' min={0} />
                <Select value={select1Val} onChange={(item) => { setSelect1Val(item)}} className='text-center input_select' options={options} />
            </div>
            <div className='input_change_img my-3 col-2 mx-auto'>
                <img onClick={() => { setSelect1Val(select2Val); setSelect2Val(select1Val) }} width={50} src='https://cdn-icons-png.flaticon.com/512/1372/1372789.png' />
            </div>
            <div className='d-flex justify-content-center'>
                <Select value={select2Val} onChange={(item) => { setSelect2Val(item);console.log(item) }} className='input_select text-center' options={options} />
            </div>
        </div>
    )
}

