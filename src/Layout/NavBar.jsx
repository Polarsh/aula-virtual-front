import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Inicio', to: '/', current: true },
  { name: 'Nosotros', to: '/nosotros', current: false },
  { name: 'Cursos', to: '/cursos', current: true },
  { name: 'Convenios', to: '/convenios', current: false },
  { name: 'Reconocimientos', to: '/reconocimientos', current: true },
]

const navigation2 = [
  { name: 'Aula Virtual', to: '/', current: false },
  { name: 'Matricúlate', to: '/', current: true },
]

export default function NavBarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white w-full'>
      <header className='mx-auto max-w-7xl'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          {/* Logo */}
          <div className='flex lg:flex-1'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>MultiServices Silver Peru</span>
              <img
                className=' h-14 w-auto'
                src='/vite.svg'
                alt='Logo MultiServices Silver Peru'
              />
            </Link>
          </div>
          {/* Menú hamburguesa */}
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Abrir menú principal</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          {/* Links */}
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map(item => (
              <Link
                key={item.name}
                to={item.to}
                className='text-sm font-semibold leading-6 text-gray-900'>
                {item.name}
              </Link>
            ))}
          </div>
          {/* Para centrar los links */}
          <div className='hidden lg:flex lg:gap-x-5 lg:flex-1 lg:justify-end'>
            {navigation2.map(item => (
              <Link
                key={item.name}
                to={item.to}
                className='text-sm font-semibold leading-6 text-gray-900'>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <Link to='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>AV</span>
                <img
                  className=' h-14 w-auto'
                  src='/vite.svg'
                  alt='Logo MultiServices Silver Peru'
                />
              </Link>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Cerrar menú</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className='space-y-2 py-6 '>
                  {navigation2.map(item => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
