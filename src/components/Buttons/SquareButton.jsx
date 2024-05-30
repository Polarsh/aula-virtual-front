import { getCardStyleByColor } from '../../utils/utils'

export default function SquareButtonComponent({ label, onClick, color }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${getCardStyleByColor(color)} rounded px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}>
      {label}
    </button>
  )
}
