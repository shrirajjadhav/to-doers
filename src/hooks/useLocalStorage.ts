import {useState, useEffect} from 'react'

const useLocalStorage = (key:string) => {

  const [value, setValue] = useState(()=>{
    const storedValue = JSON.parse(localStorage.getItem(key) || "[]")
    
    // return storedValue!==null && storedValue.length!==0 ? storedValue : null
    return storedValue
  })

  useEffect(()=>{
    if(value!==null)
    localStorage.setItem(key, JSON.stringify(value))
  },[key,value])
  

  return [value, setValue]
}

export default useLocalStorage