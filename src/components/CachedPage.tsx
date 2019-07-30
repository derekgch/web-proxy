import React from 'react'
import Parser, { domToReact } from 'html-react-parser';
interface Props {
  content:any;
}

const CachedPage: React.FC<Props> = (props) => {

  const compareContent =(content:string, i:number, tag:string):boolean=>{
    let j = 0;
    while(j < tag.length){
      if(content[i+j] !== tag[j])
        return false;
      j++;
    }
    return true;
  }


  const getTagPosition = (content:any, tag:string) => {
    for(let i =0; i < content.length - tag.length; i++){
      if(content[i] === tag[0] && compareContent(content, i, tag)){
        return i;
      }
    }
    return -1;
  }

  const getBetween = (content:any):string =>{
    const startIndex = getTagPosition(content, '<body>') + 6;
    const endIndex = getTagPosition(content, '</body>');
    console.log(startIndex, endIndex)
    if(startIndex!== -1 && endIndex !== -1){
      return content.slice(startIndex, endIndex);
    }
    return 'NOT FOUND';
  }


  const html_1 = {
    __html: `<p>${getBetween(props.content)}</p>`,
  }

  // console.log(props.content);
  const afterParse = Parser(getBetween(props.content));
  console.log("after parse1!!", afterParse);
  console.log(html_1)
  return (
    <div className={"page"} dangerouslySetInnerHTML={html_1}>
    </div>
  )
}

export default CachedPage
