export const getCardStyleByStatus = status => {
  let style

  switch (status) {
    case 'Correcto':
      style = 'bg-green-50 text-green-700 ring-green-600/20'
      break

    case 'Incorrecto':
      style = 'bg-red-50 text-red-700 ring-red-600/20'
      break

    case 'No marcado':
      style = 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
      break

    default:
      style = 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'
      break
  }

  return style
}

export const getCardStyleByColor = color => {
  let style

  switch (color) {
    case 'green':
      style = 'bg-green-100 text-green-500 ring-green-300 hover:bg-green-50'
      break

    case 'red':
      style = 'bg-red-100 text-red-500 ring-red-300 hover:bg-red-50'
      break

    default:
      style = 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'
      break
  }

  return style
}

export const formatTime = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':')
}

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
