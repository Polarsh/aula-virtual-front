import { XCircleIcon } from '@heroicons/react/24/outline'

export default function NoContentComponent({ size = 'h-96' }) {
  return (
    <div
      className={`${size} w-full flex flex-col items-center justify-center space-y-4`}>
      <XCircleIcon
        className='h-24 w-24 text-red-500'
        aria-hidden='true'
        aria-label='No content found'
      />
      <div className='text-lg font-semibold'>No se encontró contenido</div>
      <div className='text-center'>
        Estimado estudiante, aún no hay contenido para ti en esta sección.
      </div>
    </div>
  )
}
