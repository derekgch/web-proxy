import React,{ useState, useEffect } from 'react';
import InputForm from './InputForm';
import CachePage from './CachedPage';
import { getPage } from '../Utility';

// const URL = 'www.google.com';

const MainContainer: React.FC = () => {
  const [ page , setPage ] = useState('');
  
  const getPageFromUrl = (url:string) =>{
    console.log("url:", url)
    getPage(url)
      .then((data:any) => {
        setPage(data);
        console.log(data)
      })
  }
  

  return (
    <div>
      <InputForm 
        handleSumbit={getPageFromUrl}
      />
      <CachePage 
        content = {page}
      />
    </div>
  )
}

export default MainContainer
