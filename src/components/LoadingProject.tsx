interface IProps {



}

const LoadingProject=({}:IProps)=> {
  return (
    <div className="my-5">

     {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="gap-1">
            <h1 className="md:font-semibold md:text-[30px] md:leading-9 md:tracking-[-0.75px] text-[#041B3C] ">Projects</h1>
            <p className="md:font-normal text-[16px] leading-6 text-[#434654]  ">Manage and Create your project</p>
        </div>
      
        </div>

        <div className="hidden md:block w-44 h-12 bg-gray-200 rounded animate-pulse" />
      </div>
       {/* main */}
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="p-6 border border-transparent rounded-xl bg-white"
          >
            <div className="w-3/4 h-26 bg-gray-200 rounded animate-pulse" />

           
              
            <div className="mt-4 space-y-2 h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
            

            
              <div className="mt-6 w-20 h-4 bg-gray-200 rounded animate-pulse" />
             
           
          </div>
        ))}
    
    </div>
    </div>

    // main
    
  )
}

export default LoadingProject