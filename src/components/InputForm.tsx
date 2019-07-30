import React, { useState } from 'react';
import './InputForm.css';
interface Props {
  handleSumbit:(url:string) => void
}

const InputForm: React.FC<Props> = (props) => {
  const [ url, setUrl ] = useState('');
  const [ optional, setOptional ] = useState('');

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target;
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
  const handleSumbit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    event.stopPropagation();
    props.handleSumbit(url);
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSumbit}>
      <input  type='text' 
              value={url} 
              placeholder={"Input url"} 
              onChange={handleChange}
              name="url">
      </input> 

      <input  type='text' 
              value={optional} 
              onChange={handleChange}
              placeholder={"optional input field"} >
      </input>
      <button>
        submit
      </button>
      </form>
    </div>
  )
}

export default InputForm
