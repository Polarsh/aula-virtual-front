import { UserGroupIcon } from '@heroicons/react/20/solid'

const iconComponents = {
  UserGroupIcon,
  // Agrega más iconos aquí si es necesario
}

export default function renderIcon(iconName) {
  const IconComponent = iconComponents[iconName]
  if (IconComponent) {
    return (
      <IconComponent
        className='h-48 w-48 flex-none text-my-primary'
        aria-hidden='true'
      />
    )
  } else {
    return null
  }
}
