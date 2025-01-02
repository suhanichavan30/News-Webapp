import React from 'react'

const Card = ({data}) => {

  const handleclick=(url)=>{
    window.open(url)
  }
  return (
    <div className='  flex justify-center overflow-x-hidden  flex-wrap m-5 p-5 items-start'>
      {data.map((elem,idx)=>{
        if(!elem.urlToImage){
          return null
        }else{
        return (
          <div key={idx} className='border-2 bg-gray-200 h-[55vh] w-[25vw] m-4'>
            <div className=''>
          <img className='h-[30vh] object-cover w-full' src={elem.urlToImage} />
            <p onClick={()=>{handleclick(elem.url)}} className='hover:underline cursor-pointer para tracking-tighter overflow-y-scroll h-[8vh] text-lg font-medium'>{elem.title}</p>
            <p className=' para text-sm h-[8vh] overflow-y-scroll m-1'>{elem.description}</p>
            <button onClick={()=>{(handleclick(elem.url))}} className='bg-[#1ECBE1] text-black m-2 px-2 py-1.5 font-medium rounded-md'>Read more</button>
          </div>
          </div>
        )
      }
      })}
        
    </div>
  )
}

export default Card