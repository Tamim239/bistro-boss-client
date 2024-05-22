import axios from "axios";
import { useEffect, useState } from "react";

export const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
     axios.get('http://localhost:3000/menu')
      .then(data =>{
          setMenu(data?.data);
          setLoading(false)
      })
    },[])

  return [menu, loading]
}
