import ArrowRight from "../.././../assets/icons/Icon_rarrow.svg?react"
interface IProps {



}

const MemberSkelton=({}:IProps)=> {
 return(
  <>
  {/* header */}
  <div className="hidden md:flex items-end justify-between animate-pulse">
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="h-3 w-16 bg-gray-200 rounded" >
        
      </div>
      <ArrowRight className="w-[3.7px] h-1.5 text-[#43465466]" />
      <div className="h-3 w-20 bg-gray-200  rounded" />
      
    </div>

    <div className="h-10 w-64 bg-gray-200  rounded" />
  </div>

  <div className="h-12 w-36 bg-gray-200 rounded-md" />
</div>

    {/* table */}
    <div className="hidden sm:block mt-16 mx-auto w-3xl border border-[#E6EAF2] rounded-lg overflow-hidden  animate-pulse">
      <table className="w-full">
       <thead className="bg-[#F8FAFC]">
  <tr>
    <th className="py-5 px-8 text-left">
      <div className="h-3 w-16 bg-gray-300 rounded animate-pulse"></div>
    </th>

    <th className="py-5 px-8 text-left">
      <div className="h-3 w-12 bg-gray-300 rounded animate-pulse"></div>
    </th>

    <th className="py-5 px-8 text-right">
      <div className="h-3 w-16 bg-gray-300 rounded ml-auto animate-pulse"></div>
    </th>
  </tr>
</thead>

        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="border-t border-[#E6EAF2]">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-200" />

                  <div>
                    
                  </div>
                </div>
              </td>

              <td className="py-4 px-6">
                <div className="h-6 w-16  rounded-xl bg-gray-200" />
              </td>

              <td className="py-4 px-6">
                <div className="ml-auto h-6 w-6 rounded bg-gray-200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    {/* mob */}
    <div className="sm:hidden space-y-4 px-5  animate-pulse mt-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-md p-4 flex items-center gap-3 overflow-x-hidden"
        >
          <div className="w-10 h-10 rounded-lg bg-gray-200" />

          <div className="flex-1">
            <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-32 bg-gray-200 rounded" />
          </div>

          <div className="h-6 w-14 bg-gray-200 rounded-lg" />
        </div>
      ))}
    </div>
  </>
    
  );
}

export default MemberSkelton