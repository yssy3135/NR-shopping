import React,{useState} from 'react'
import {Collapse,Radio} from 'antd'

const { Panel } = Collapse;
function RadioBox(props) {

    const [Value, setValue] = useState(0)


    
    
    
    const renderRadiobox = () => props.list && props.list.map((value) => (
        
        <Radio key = {value._id} value = {value._id} >
            <span>{value.name}</span>
        </Radio>
     
     ))
     
     const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value);
    };



    return (
        <div>
            <Collapse defaultActiveKey = {['0']}>
                <Panel header="Price" key="1">
                    <Radio.Group onChange={handleChange} value={Value}> 
                        {renderRadiobox()}
                    </Radio.Group>
                </Panel>
            
             </Collapse>
        
         
        </div>
    )
}

export default RadioBox
