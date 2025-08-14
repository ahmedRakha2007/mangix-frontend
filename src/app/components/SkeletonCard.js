 const SkeletonCard = () => {
  return (
    <div className='flex items-center gap-5 animate-pulse p-2'>
      <div className='bg-gray-300 rounded w-[170px] h-[170px] shadow-lg'></div>
      <div className='flex flex-col justify-between gap-2 w-full'>
        <div className='bg-gray-300 h-6 w-3/4 rounded'></div>
        <div className='bg-gray-300 h-4 w-1/2 rounded'></div>
        <div className='flex items-center gap-2'>
          <div className='bg-gray-300 h-5 w-14 rounded'></div>
          <div className='bg-gray-300 h-6 w-12 rounded'></div>
        </div>
        <div className='bg-gray-300 h-8 w-28 rounded'></div>
      </div>
    </div>
  )
}
export default SkeletonCard;