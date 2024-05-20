import { PhotoIcon } from '@heroicons/react/24/solid'

export default function FormUploadFileComponent({
  imageFile,
  setImageFile,
  error,
  isDisabled = false,
}) {
  const handleButtonClick = () => {
    document.getElementById('file-upload').click()
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    console.log(file)
    setImageFile('file', file)
  }

  return (
    <div>
      <button
        onClick={handleButtonClick}
        type='button'
        className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary600 focus:ring-offset-2'>
        <svg
          className='mx-auto h-12 w-12 text-gray-400'
          stroke='currentColor'
          fill='none'
          viewBox='0 0 48 48'
          aria-hidden='true'>
          <PhotoIcon
            className='mx-auto h-12 w-12 text-gray-300'
            aria-hidden='true'
          />
        </svg>
        {imageFile ? (
          <>
            <h3 className='mt-2 text-sm font-semibold text-gray-900'>
              {imageFile.name}
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Haga click para cambiar de archivo
            </p>
          </>
        ) : (
          <>
            <h3 className='mt-2 text-sm font-semibold text-gray-900'>
              Subir imagen
            </h3>
            <p className='text-xs leading-5 text-gray-600'>
              JPEG, JPG, RAW, PNG y HEIC hasta 10MB
            </p>
          </>
        )}
      </button>

      {/* Input oculto para seleccionar archivos */}
      <input
        type='file'
        id='file-upload'
        accept='.jpeg,.jpg,.raw,.png,.heic'
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {error && <p className='mt-2 mobile:text-xl text-red-600'>{error}</p>}
    </div>
  )
}
