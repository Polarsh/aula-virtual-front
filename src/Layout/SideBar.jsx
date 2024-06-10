import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import LogoComponent from '../components/Logo'

const navigation = [
  { name: 'Inicio', href: '/inicio', icon: HomeIcon, current: true },
  {
    name: 'Videoteca',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Mis clases', href: '/videoteca/mis-clases' },
      { name: 'Cronograma', href: '/videoteca/cronograma' },
      { name: 'Tutoriales', href: '/videoteca/tutoriales' },
      { name: 'Materiales', href: '/videoteca/materiales' },
      { name: 'Manuales eBooks', href: '/videoteca/manuales-ebooks' },
    ],
  },
  {
    name: 'Evaluaciones',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Simulacros', href: '/evaluaciones/simulacros' },
      { name: 'Banco de preguntas', href: '/evaluaciones/banqueo' },
    ],
  },
  {
    name: 'Metodología',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Nuestra metodología', href: '/metodologia/metodologia' },
      { name: 'Tendencias', href: '/metodologia/tendencias' },
    ],
  },
  {
    name: 'Mentorías',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Asesorias', href: '/mentoria/asesorias' },
      { name: 'Test Psicológicos', href: '/mentoria/test-psicologicos' },
    ],
  },
  {
    name: 'Cursos',
    href: '/cursos',
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: 'Canales de atención',
    href: '/canales-de-atencion',
    icon: ChartPieIcon,
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBarComponent() {
  return (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r bg-gray-900 px-6 ring-1 ring-white/10'>
      <div className='flex h-16 shrink-0 items-center'>
        <LogoComponent size={8} />
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {navigation.map(item => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}>
                      <item.icon
                        className='h-6 w-6 shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={classNames(
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold'
                            )}>
                            <item.icon
                              className='h-6 w-6 shrink-0 text-gray-400'
                              aria-hidden='true'
                            />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? 'rotate-90 text-gray-500'
                                  : 'text-gray-400',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden='true'
                            />
                          </DisclosureButton>
                          <DisclosurePanel as='ul' className='mt-1 px-2'>
                            {item.children.map(subItem => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <DisclosureButton
                                  as='a'
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6'
                                  )}>
                                  {subItem.name}
                                </DisclosureButton>
                              </li>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className='-mx-6 mt-auto'>
            <a
              href='#'
              className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'>
              <Cog6ToothIcon
                className='h-6 w-6 shrink-0 text-gray-400'
                aria-hidden='true'
              />
              <span className='sr-only'>Configuración</span>
              <span aria-hidden='true'>Configuración</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
