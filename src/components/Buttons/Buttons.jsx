export default function ButtonComponent({
  label,
  icon: Icon,
  onClick,
  bgColor = 'bg-white',
  textColor = 'text-gray-900',
  hoverColor = 'bg-gray-50',
  ringColor = 'gray-300',
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-x-1.5 rounded-full ${textColor} ${bgColor} ${'hover:' + hoverColor} ${'ring-' + ringColor} px-4 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset`}>
      {Icon && <Icon className='-ml-0.5 h-5 w-5' aria-hidden='true' />}
      {label}
    </button>
  )
}
