

export function getPage(URL:string):any {
  return fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        
      }
    }
  ).then(r => r.text())
}

export type PageContent ={
  page:number,
  content:any
}