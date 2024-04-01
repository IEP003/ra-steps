import { useMemo, useState } from 'react'
import { TraningItems } from '../TraningItems/TraningItems'
import './TraningList.css'
import { TData } from '../InputForm/InputForm'
import { sorting } from '../../utils/sorting'


type Props = {
  arr: TData,
  onDelete: (values: TData) => void
}

export const TraningList = ( { arr, onDelete } : Props) => {
  const sortedWorkoutList = useMemo(
    () => sorting([...arr]),
    [arr]
  );
  
  return (
    <table className='traning-field'>
      <thead>
        <tr className='header-traning-field'>
            <th className='category'>Дата (ДД.ММ.ГГ)</th>
            <th className='category'>Пройдено км</th>
            <th className='category'>Действия</th>
        </tr>
        
      </thead>
      <tbody className='list-result'>
        {sortedWorkoutList.map((item, index) => (<TraningItems data={item} key={index} onDelete={onDelete}/>))}
        
      </tbody>
        
    </table>
  )
}
