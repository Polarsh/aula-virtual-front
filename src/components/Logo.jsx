export default function LogoComponent({ size }) {
  return (
    <div>
      <span className='sr-only'>MultiServices Silver Peru</span>
      <img
        className={`h-${size} w-auto`}
        src='/vite.svg'
        alt='Logo MultiServices Silver Peru'
      />
    </div>
  )
}
