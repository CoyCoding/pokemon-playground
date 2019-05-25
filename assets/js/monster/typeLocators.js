import {typeList} from './data/typeList'
import { Type } from './modles/monster'

export function findTypeName(name){
  const foundType = typeList.find(type=>{
    return type[name];
  }) 
}
