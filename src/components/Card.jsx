export default function CardComponent({ className, children }) {
  return (
    <>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <div className={className}>{children}</div>
        </div>
      </div>
    </>
  )
}
