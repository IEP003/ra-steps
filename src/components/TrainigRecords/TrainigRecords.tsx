import { useCallback, useState } from 'react'
import { InputForm, TData } from '../InputForm/InputForm'
import { TraningList } from '../TraningList/TraningList'

type TDataId = {
  data: TDataId
  id: number
}

export const TrainigRecords = () => {
  
  
  const [countTraning, setCountTraining] = useState([])



  const addTrainingList = ({ ...data } : TData) => {
    let add = countTraning
    if(countTraning.length !== 0){
      countTraning.forEach((item) => {
        if(item.date === data.date) {
          console.log(`${item.date} равна ${data.date}`)
          const addIndex = add.indexOf(item)
          const first = Number(item.distance);
          const second = Number(data.distance);
          add[addIndex].distance = first + second
          console.log(add)
          return setCountTraining([...add])
        } else if (item.date !== data.date) {
          console.log(`${item.date} не равна ${data.date}`)
          setCountTraining([...countTraning, data])
        }
      })
    } else {
      setCountTraining([...countTraning, data])
    }
     
  }

  const deleteTrainigList = (e) => {
    const del = countTraning
    countTraning.forEach((item) => {
      if(item.id == e.target.id){
        const delIndex = del.indexOf(item)
        del.splice(delIndex, 1)
        setCountTraining([...del])
      }
    })
    /* const a = countTraning
    a.splice(e.target.id, 1)
    setCountTraining([...a]) */
  }

  return (
    <>
        <InputForm onChangeList={addTrainingList}/>
        <TraningList arr={countTraning} onDelete={deleteTrainigList}/>
    </>
  )
}
