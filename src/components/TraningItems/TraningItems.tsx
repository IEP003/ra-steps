import { TData } from '../InputForm/InputForm'
import './TraningItems.css'

type Props = {
  data: TData 
  id: number
  onDelete: (values: TData) => void
}

export const TraningItems = ({data, onDelete } : Props) => {
  return (
    <tr className='traning-items'
    id={data.id}
    >
      <td className='items-date'>{data.date}</td> 
      <td className='items-distance'>{data.distance}</td>
      <td>
        <div className='button-delete'
        id={data.id}
        onClick={(e) => onDelete(e)
        }
        >удалить</div>
      </td>
    </tr>
    
  )
}
