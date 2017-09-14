import {get,post} from '../index';
//获取订单列表
export function getSearch(city,page) {
  return get('/api/search/'+city+'/'+page);
}