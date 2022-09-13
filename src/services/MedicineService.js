import axios from "axios";
const MEDICINE_API_BASE_URL = "http://localhost:8080/api/v1/medicines";

class MedicineService {
  getMedicines() {
    return axios.get(MEDICINE_API_BASE_URL, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbG9yeTEyIiwiaWF0IjoxNjYyOTkyNjk3LCJleHAiOjE2NjMwNzkwOTd9.hPweUDue9TQW3XiX-PGSdlkwJAt2EOWEXg3yj-vChQ4GVc66R5eqJqvc7KhJ1BcpAbb5pw2m8hxYNhMxqCO-zA`
      },
    })
  }
  addMedicines(medicines) {
    console.log('Visited')
    // return axios.post(MEDICINE_API_BASE_URL, medicines,);
    return axios.post(MEDICINE_API_BASE_URL, medicines, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbG9yeTEyIiwiaWF0IjoxNjYyOTkyNjk3LCJleHAiOjE2NjMwNzkwOTd9.hPweUDue9TQW3XiX-PGSdlkwJAt2EOWEXg3yj-vChQ4GVc66R5eqJqvc7KhJ1BcpAbb5pw2m8hxYNhMxqCO-zA`
      },
    })
  }
  getMedicinesById(medicineid) {
    return axios.get(MEDICINE_API_BASE_URL + "/" + medicineid,
    {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbG9yeTEyIiwiaWF0IjoxNjYyOTkyNjk3LCJleHAiOjE2NjMwNzkwOTd9.hPweUDue9TQW3XiX-PGSdlkwJAt2EOWEXg3yj-vChQ4GVc66R5eqJqvc7KhJ1BcpAbb5pw2m8hxYNhMxqCO-zA`
      },
    })
  }
  updateMedicines(medicineid,medicines){
    return axios.put(MEDICINE_API_BASE_URL+'/'+medicineid,medicines, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbG9yeTEyIiwiaWF0IjoxNjYyOTkyNjk3LCJleHAiOjE2NjMwNzkwOTd9.hPweUDue9TQW3XiX-PGSdlkwJAt2EOWEXg3yj-vChQ4GVc66R5eqJqvc7KhJ1BcpAbb5pw2m8hxYNhMxqCO-zA`
      },
    })
  }
  deleteMedicine(medicineid){
    return axios.delete(MEDICINE_API_BASE_URL+'/'+medicineid , {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbG9yeTEyIiwiaWF0IjoxNjYyOTkyNjk3LCJleHAiOjE2NjMwNzkwOTd9.hPweUDue9TQW3XiX-PGSdlkwJAt2EOWEXg3yj-vChQ4GVc66R5eqJqvc7KhJ1BcpAbb5pw2m8hxYNhMxqCO-zA`
      },
    })
  }
}
export default new MedicineService();
