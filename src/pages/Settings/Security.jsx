import CardComponent from '../../components/Card/Card'

const response = {
  email: 'email@gmail.com',
  phoneNumber: 987654321,
}

export default function SecurityPage() {
  const data = response

  return (
    <div>
      <CardComponent>
        <div className='lg:flex-auto'>
          <div className='mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Seguridad
              </h2>
              {/* <p className='mt-1 text-sm leading-6 text-gray-500'>
                  This information will be displayed publicly so be careful what
                  you share.
                </p> */}
              <dl className='mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6'>
                <div className='pt-6 sm:flex'>
                  <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                    Email
                  </dt>
                  <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                    <div className='text-gray-900'>{data.email}</div>
                  </dd>
                </div>
                <div className='pt-6 sm:flex'>
                  <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                    Número de celular
                  </dt>
                  <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                    <div className='text-gray-900'>{data.phoneNumber}</div>
                  </dd>
                </div>
                <div className='pt-6 sm:flex'>
                  <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                    Contraseña
                  </dt>
                  <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                    <div className='text-gray-900'>********</div>
                    <button
                      type='button'
                      className='font-semibold text-indigo-600 hover:text-indigo-500 hover:cursor-not-allowed'>
                      Cambiar contraseña
                    </button>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  )
}
