import React{useState,useEffect} from "React";
import {fetchData} from "../services/api";



const App=(){
    const[data,setdata]=useState(null);
    const[Loading,setLoading]=useState(null);
    const[error,SetError]=useState(null);
}


useEffect()){
    const getdata=async()=>{
        try{
            const result=await fetchData();
            setData(result);
        }
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    };
    getData()
},[]);

if(loading) return <div>Looading</div>
if(error) return <div>Error fetching data:</div>

return(
    <div>
        <h1>Data from API</h1>
        <pre>{Json.stringify(data,null,2)</pre>
    </div>
);

export default App;