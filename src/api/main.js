import Axios from './http'
class Main {
  getList(params){
    return Axios.get('/xxx',params)
  }
}

export default Main
