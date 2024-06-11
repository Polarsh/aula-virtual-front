import { CubeIcon, FingerPrintIcon, UserIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom'

const initialTabs = [
  { name: 'Mi cuenta', to: '/ajustes/cuenta', icon: UserIcon, current: true },
  {
    name: 'Seguridad',
    to: '/ajustes/seguridad',
    icon: FingerPrintIcon,
    current: false,
  },
  {
    name: 'Mis cursos',
    to: '/ajustes/mis-cursos',
    icon: CubeIcon,
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SettingsMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const [pageTabs, setPageTabs] = useState(initialTabs)

  useEffect(() => {
    if (location.pathname === '/ajustes') {
      navigate('/ajustes/cuenta')
    } else {
      const updatedTabs = pageTabs.map(tab => ({
        ...tab,
        current: tab.to === location.pathname,
      }))
      setPageTabs(updatedTabs)
    }
  }, [location.pathname, navigate])

  return (
    <div className='-my-10 -mx-4 sm:-mx-6 lg:-mx-8'>
      <div className='block bg-white px-4 sm:px-6 lg:px-8'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
            {pageTabs.map(tab => (
              <Link
                key={tab.name}
                to={tab.to}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}>
                <tab.icon
                  className={classNames(
                    tab.current
                      ? 'text-indigo-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden='true'
                />
                <span>{tab.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className='py-10'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
