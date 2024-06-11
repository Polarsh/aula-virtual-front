import CardComponent from '../../components/Card/Card'

const response = {
  fullName: 'Yorch Sanchez',
  dateOfBirth: '01/01/1900',
  documentType: 'DNI',
  documentNumber: 87654321,
  university: 'Universidad 1',
  educationalLevel: 'Bachiller',
  email: 'email@gmail.com',
  phoneNumber: 987654321,
  department: 'Lima',
  province: 'Lima',
  district: 'Surco',
  address: 'Av. La Encalada 1420',
}

export default function MyAccountPage() {
  const data = response

  const formattedData = {
    'Información personal': {
      'Nombre completo': data.fullName,
      'Fecha de nacimiento': data.dateOfBirth,
      'Documento de identidad': data.documentType + ' - ' + data.documentNumber,
      Universidad: data.university,
      'Nivel de educación': data.educationalLevel,
      Especialidad: '-',
      'Nro colegiatura - CMP': '-',
    },
    'Información de contacto': {
      Email: data.email,
      'Número de celular': data.phoneNumber,
    },
    'Información de ubicación': {
      Departamento: data.department,
      Provincia: data.province,
      Distrito: data.district,
      Dirección: data.address,
    },
  }

  return (
    <div>
      <CardComponent>
        <div className='lg:flex-auto'>
          <div className='mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none'>
            {Object.entries(formattedData).map(([category, dataObject]) => (
              <div key={category}>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  {category}
                </h2>
                {/* <p className='mt-1 text-sm leading-6 text-gray-500'>
                  This information will be displayed publicly so be careful what
                  you share.
                </p> */}
                <dl className='mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6'>
                  {Object.entries(dataObject).map(([label, value]) => (
                    <div key={label} className='pt-6 sm:flex'>
                      <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                        {label}
                      </dt>
                      <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                        <div className='text-gray-900'>{value}</div>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </CardComponent>
    </div>
  )
}
