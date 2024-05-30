import ModalComponent from './Modal'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { DialogTitle } from '@headlessui/react'

export default function ConfirmSubmitModal({
  title,
  content,
  handleClose,
  handleConfirmAction,
}) {
  return (
    <ModalComponent isShow={true} handleClose={handleClose}>
      <div className='sm:flex sm:items-start'>
        <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
          <ExclamationTriangleIcon
            className='h-6 w-6 text-red-600'
            aria-hidden='true'
          />
        </div>
        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
          <DialogTitle
            as='h3'
            className='text-base font-semibold leading-6 text-gray-900'>
            {title}
          </DialogTitle>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>{content}</p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
          onClick={handleConfirmAction}>
          Aceptar
        </button>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
          onClick={handleClose}>
          Cancelar
        </button>
      </div>
    </ModalComponent>
  )
}
