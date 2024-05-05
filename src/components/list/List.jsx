import './List.css'
import Card from '../../components/Card';
import {listData} from "../../lib/dummydata"

function List({posts}){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List