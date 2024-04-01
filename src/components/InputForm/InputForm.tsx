import { FormEvent, useEffect, useRef } from 'react'
import './InputForm.css'

export type TData = { 
  date: string 
  distance: number 
  id: number
}

export type Props = {
  onChangeList: (values: TData) => void
}

export const InputForm = ({ onChangeList } : Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = formRef.current!;
    const date = form['date'].value;
    const distance = form['distance'].value;
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

    if (date && distance && dateRegex.test(date)) {
      const data = {
        date: date, 
        distance: distance,
        id: Math.random()*123
      }
      onChangeList(data)
      form.reset();
      
    } else {
      console.log("errors")
    }
  }


  return (
    <form className='input-form'action="" ref={formRef} onSubmit={handleOnSubmit}>
        <div className="container">
            <h5 className='title'>Дата (ДД.ММ.ГГ)</h5>
            <input 
            className='input-field'
            id='date'
            name='date'
            placeholder='ДД.ММ.ГГ'/>
        </div>
        <div className="container">
            <h5 className='title'>Пройдено км</h5>
            <input 
            className='input-field'
            id='distance'
            name='distance'
             />
        </div>
        <button className='ok'>ok</button>
    </form>
  )
}
