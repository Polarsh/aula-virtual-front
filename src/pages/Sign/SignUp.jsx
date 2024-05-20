import { useState } from 'react'
import { FormInputComponent } from '../../components/form/Input'
import { useApp } from '../../context/AppContext'
import { FormSelectComponent } from '../../components/form/Select'
import { FormCheckBoxComponent } from '../../components/form/Checkbox'

const initialForm = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  documentType: '',
  documentNumber: '',
  university: '',
  educationalLevel: '',
  email: '',
  password: '',
  phoneNumber: '',
  department: '',
  province: '',
  district: '',
  address: '',
  termsAndConditions: false,
  privacyPolicy: false,
}

const optionsList = {
  /* Personal */
  documentType: ['DNI', 'Pasaporte', 'Carné de extranjería'],
  university: ['U1', 'U2', 'U3'],
  educationLevel: ['Primer año', 'Segundo año', 'Tercer año'],
  /* Ubicación */
  department: ['D1', 'D2', 'D3'],
  province: ['P1', 'P2', 'P3'],
  district: ['d1', 'd2', 'd3'],
}

const validateForm = form => {
  const errors = {}

  const phoneRegex = /^\d{9}$/

  // Función de validación genérica para campos requeridos
  const validateRequiredField = (fieldName, message) => {
    if (!form[fieldName] || form[fieldName].trim() === '') {
      errors[fieldName] = message || 'Es obligatorio'
    }
  }

  // Validaciones específicas para cada campo
  validateRequiredField('firstName')
  validateRequiredField('lastName')
  validateRequiredField('dateOfBirth')
  validateRequiredField('documentType')
  validateRequiredField('documentNumber')
  validateRequiredField('university')
  validateRequiredField('educationalLevel')
  validateRequiredField('email')
  validateRequiredField('password')
  validateRequiredField('phoneNumber')
  validateRequiredField('department')
  validateRequiredField('province')
  validateRequiredField('district')
  validateRequiredField('address')

  // Validación específica para número de documento
  if (form.documentNumber && form.documentNumber.trim().length !== 8) {
    errors.documentNumber = 'El número de documento debe tener 8 dígitos'
  }

  // Validación específica para número de celular
  if (
    form.phoneNumber &&
    (!phoneRegex.test(form.phoneNumber.trim()) ||
      form.phoneNumber.trim()[0] !== '9')
  ) {
    errors.phoneNumber = 'El número de celular no es válido'
  }

  // Validación para los checkboxes
  if (!form.termsAndConditions) {
    errors.termsAndConditions = 'Debes aceptar los Términos y Condiciones'
  }

  if (!form.privacyPolicy) {
    errors.privacyPolicy =
      'Debes aceptar las Políticas de Privacidad y Tratamiento de Datos'
  }

  return errors
}

export default function SignUpPage() {
  const { setAlertMessage, setLoading } = useApp()

  const [userData, setUserData] = useState(initialForm)
  const [errors, setErrors] = useState(initialForm)

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  const handleCheckBoxChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.checked,
    })
  }

  const handleAdd = async event => {
    event.preventDefault()

    const errors = validateForm(userData)

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    } else {
      setErrors(initialForm)
    }

    setLoading(true)

    try {
      console.log('userData: ', userData)

      /* await signUpuser(userData, password) */

      setAlertMessage({
        type: 'success',
        title: 'Usuario fue registrado exitosamente',
        content: 'Usuario fue registrado exitosamente',
      })

      // Regresar
      // navigate('/user/usuarios/useristradores')
    } catch (error) {
      console.error('Error al registrar usuario:', error)

      setAlertMessage({
        type: 'error',
        title: 'Error en la creación.',
        content: error,
      })
    }

    setLoading(false)
  }

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt=''
              />
            </a>
          </div>

          <div className='lg:flex lg:flex-1 lg:justify-end'>
            <a href='/' className='text-sm font-semibold leading-6 text-white'>
              Iniciar sesión <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className='relative isolate overflow-hidden pt-14'>
        <img
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover'
        />
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              ¡Inscríbete ahora y despega hacia el éxito!
            </h1>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className='mx-auto mt-24 mb-16 max-w-4xl px-6 lg:px-8'>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
            Formulario de Registro
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Formulario de Registro
          </p>
        </div>
        <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
          <form onSubmit={handleAdd}>
            {/* Forms */}
            <div className='space-y-12'>
              {/* Información personal */}
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Información personal
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  Proporcione sus detalles personales.
                </p>
                {/* Forms */}
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  {/* Nombre */}
                  <div className='sm:col-span-3'>
                    <FormInputComponent
                      label='Nombres'
                      type='text'
                      name='firstName'
                      value={userData.firstName}
                      error={errors.firstName}
                      placeholder='Ingrese el nombre'
                      onChange={handleChange}
                    />
                  </div>

                  {/* Apellidos */}
                  <div className='sm:col-span-3'>
                    <FormInputComponent
                      label='Apellidos'
                      type='text'
                      name='lastName'
                      value={userData.lastName}
                      error={errors.lastName}
                      placeholder='Ingrese su apellido'
                      onChange={handleChange}
                    />
                  </div>

                  {/* Fecha de nacimiento */}
                  <div className='sm:col-span-2'>
                    <FormInputComponent
                      label='Fecha de nacimiento'
                      type='date'
                      name='dateOfBirth'
                      value={userData.dateOfBirth}
                      error={errors.dateOfBirth}
                      placeholder='Ingrese su fecha de nacimiento'
                      onChange={handleChange}
                    />
                  </div>

                  {/* Tipo de documento */}
                  <div className='sm:col-span-2'>
                    <FormSelectComponent
                      label='Tipo de documento'
                      name='documentType'
                      value={userData.documentType}
                      error={errors.documentType}
                      onChange={handleChange}
                      options={optionsList.documentType}
                    />
                  </div>

                  {/* Número de documento */}
                  <div className='sm:col-span-2'>
                    <FormInputComponent
                      label='Número de documento'
                      type='text'
                      name='documentNumber'
                      value={userData.documentNumber}
                      error={errors.documentNumber}
                      placeholder='Ingrese el número de documento'
                      onChange={handleChange}
                    />
                  </div>

                  {/* Universidad */}
                  <div className='sm:col-span-3'>
                    <FormSelectComponent
                      label='Universidad'
                      name='university'
                      value={userData.university}
                      error={errors.university}
                      onChange={handleChange}
                      options={optionsList.university}
                    />
                  </div>

                  {/* Nivel de educación */}
                  <div className='sm:col-span-3'>
                    <FormSelectComponent
                      label='Nivel de educación'
                      name='educationalLevel'
                      value={userData.educationalLevel}
                      error={errors.educationalLevel}
                      onChange={handleChange}
                      options={optionsList.educationLevel}
                    />
                  </div>
                </div>
              </div>

              {/* Información de contacto */}
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Información de contacto
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  Proporcione información de contacto para poder comunicarnos
                  con usted.
                </p>

                {/* Forms */}
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  {/* Email */}
                  <div className='sm:col-span-3'>
                    <FormInputComponent
                      label='Email'
                      type='email'
                      name='email'
                      value={userData.email}
                      error={errors.email}
                      placeholder='Ingrese su email'
                      onChange={handleChange}
                    />
                  </div>

                  {/* Contraseña */}
                  <div className='sm:col-span-3'>
                    <FormInputComponent
                      label='Contraseña'
                      type='password'
                      name='password'
                      value={userData.password}
                      error={errors.password}
                      placeholder='Ingrese su contraseña'
                      onChange={handleChange}
                    />
                  </div>

                  {/* Número de celular */}
                  <div className='sm:col-span-3'>
                    <FormInputComponent
                      label='Número de celular'
                      type='text'
                      name='phoneNumber'
                      value={userData.phoneNumber}
                      error={errors.phoneNumber}
                      placeholder='Ingrese su número de celular'
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Información de ubicación */}
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Información de ubicación
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  Utilice una dirección permanente donde pueda recibir material
                  físico en caso de que el curso lo requiera.
                </p>

                {/* Form */}
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  {/* Departamento */}
                  <div className='sm:col-span-2'>
                    <FormSelectComponent
                      label='Departamento'
                      name='department'
                      value={userData.department}
                      error={errors.department}
                      onChange={handleChange}
                      options={optionsList.department}
                    />
                  </div>

                  {/* Provincia */}
                  <div className='sm:col-span-2'>
                    <FormSelectComponent
                      label='Provincia'
                      name='province'
                      value={userData.province}
                      error={errors.province}
                      onChange={handleChange}
                      options={optionsList.province}
                    />
                  </div>

                  {/* Distrito */}
                  <div className='sm:col-span-2'>
                    <FormSelectComponent
                      label='Distrito'
                      name='district'
                      value={userData.district}
                      error={errors.district}
                      onChange={handleChange}
                      options={optionsList.district}
                    />
                  </div>

                  {/* Dirección */}
                  <div className='sm:col-span-6'>
                    <FormInputComponent
                      label='Dirección'
                      type='text'
                      name='address'
                      value={userData.address}
                      error={errors.address}
                      placeholder='Ingrese su dirección'
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Acepta los Términos y Condiciones
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  Siempre te informaremos sobre cambios importantes, pero tú
                  decides qué más deseas recibir.
                </p>

                <div className='mt-6 space-y-6'>
                  <FormCheckBoxComponent
                    name='termsAndConditions'
                    value={userData.termsAndConditions}
                    error={errors.termsAndConditions}
                    onChange={handleCheckBoxChange}>
                    <div>
                      Acepto{' '}
                      <span className=' font-bold'>Términos y Condiciones</span>{' '}
                      del servicio
                    </div>
                  </FormCheckBoxComponent>

                  <FormCheckBoxComponent
                    label='Acepto las Políticas de Privacidad y Tratamiento de Datos'
                    name='privacyPolicy'
                    value={userData.privacyPolicy}
                    error={errors.privacyPolicy}
                    onChange={handleCheckBoxChange}>
                    <div>
                      Acepto las{' '}
                      <span className=' font-bold'>
                        Políticas de Privacidad y Tratamiento de Datos
                      </span>
                    </div>
                  </FormCheckBoxComponent>
                </div>
              </div>
            </div>

            {/*  Botones */}
            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='button'
                className='text-sm font-semibold leading-6 text-gray-900'>
                Cancelar
              </button>
              <button
                type='button'
                onClick={handleAdd}
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Matricularse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
