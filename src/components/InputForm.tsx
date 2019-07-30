import React, { useState } from 'react'

interface Props {
  
}

const InputForm: React.FC<Props> = (props) => {
  const [ url, setUrl ] = useState('');
  const [ optional, setOptional ] = useState('');

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    switch (name) {
      case 'url':
        setUrl(value);
        break;
      case 'optional':
        setOptional(value);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <label defaultValue={"URL:"}>
        <input  type='text' 
                value={url} 
                placeholder={"Input url"} 
                onChange={handleChange}
                name="url">
        </input> 
      </label>
      <label defaultValue={"Optional:"}>
        <input  type='text' 
                value={optional} 
                onChange={handleChange}
                placeholder={"optional input field"} >
        </input>
      </label>
    </div>
  )
}

export default InputForm
