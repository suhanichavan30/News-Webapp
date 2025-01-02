import {React,useState,useEffect} from 'react'
import Card from './Card'

const News = () => {

  const [search, setSearch] = useState("india")
  const [data, setdata] = useState(null)

  const handlechange=(e)=>{
    setSearch(e.target.value)
  }


  const apiurl=import.meta.env.VITE_API_URL  
 
    const fetchdata = async (search) => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiurl}`);
        const data = await response.json();
        setdata(data.articles)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   

    const alldata=(e)=>{
      const category=e.target.value
      setSearch(category)
      fetchdata(category)
    }
    

    useEffect(() => {
      fetchdata(search)
    }, [])

    

  return (
    <>
    <div className=' text-center bg-gray-200 flex justify-between items-center'>
      
        <div>
        <button  onClick={alldata}  value='sports'className='btn m-2 py-2 px-3 text-lg shadow-2xl  font-md'>Sports</button>
        <button onClick={alldata} value='politics'className='btn m-2 py-2 px-3 text-lg font-md shadow-2xl '>Politics</button>
        <button onClick={alldata} value='shopping'className='btn m-2 py-2 px-3 text-lg font-md shadow-2xl'>Shopping</button>
        <button onClick={alldata} value='travel'className='btn m-2 py-2 px-3 text-lg font-md shadow-2xl'>Travel</button>
        <button  onClick={alldata}value='entertainment'className='btn m-2 py-2 px-3 text-lg font-md shadow-2xl'>Entertainment</button>
        <button onClick={alldata} value='weather'className=' m-2 btn py-2 px-3 text-lg font-md shadow-2xl'>Weather</button>
        <button onClick={alldata} value='health'className=' m-2 py-2 btn px-3 text-lg font-md shadow-2xl'>Health</button>
        <button onClick={alldata} value='education 'className=' m-2 py-2 btn px-3 text-lg font-md shadow-2xl '>Education</button>
        </div>
        <div className=''>
        <input className='border-2 border-black p-2 w-[24vw] rounded-md text-xl' type="text" placeholder='Search news ' value={search} onChange={handlechange}/>
        <button className='border-2 border-black p-2 rounded-md text-xl bg-[#1ECBE1]' onClick={()=>{fetchdata(search)}}>Search</button>
      </div>

      
    </div>

    <div>
      {data?<Card data={data}/>:null}
      
    </div>
    </>
  )
}

export default News