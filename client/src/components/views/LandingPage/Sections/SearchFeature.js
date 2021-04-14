import React, {useState} from 'react'
import { Input, Space } from 'antd';



const { Search } = Input;
function SearchFeature(props) {
    const [SeachTerm, setSeachTerm] = useState("")

    const searchHandler = (event) =>{

        setSeachTerm(event.currentTarget.value);
        props.refreshFunction(event.currentTarget.value)
    }



    return (
        <div>
            <Search placeholder="input search text" 
                onChange={searchHandler} 
                style={{ width: 200 }}
                value = {SeachTerm} 
            />
        </div>
    )
}

export default SearchFeature
