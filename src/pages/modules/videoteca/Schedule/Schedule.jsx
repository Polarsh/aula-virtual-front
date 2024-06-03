import { useState, useEffect } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
  addMonths,
} from 'date-fns'
import { es } from 'date-fns/locale' // Importar localización en español
import CardComponent from '../../../../components/Card/Card'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function SchedulePage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    // Esto establecerá el mes actual en la fecha actual cuando se monte el componente
    setCurrentMonth(new Date())
  }, [])

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy'

    return (
      <div className='flex justify-between items-center mb-8'>
        <div className='flex bg-blue-200'>
          <button
            type='button'
            onClick={prevMonth}
            className='mr-4 flex flex-none items-center justify-center text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Previous month</span>
            <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
          </button>
          <span className='text-lg flex-auto font-semibold'>
            {format(currentMonth, dateFormat, { locale: es })}
          </span>
          <button
            type='button'
            onClick={nextMonth}
            className='ml-4 flex flex-none items-center justify-center text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Next month</span>
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const dateFormat = 'EEE'
    const startDate = startOfWeek(currentMonth, { locale: es })

    return (
      <div>
        <div className='grid grid-cols-7 gap-px text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none'>
          {Array.from({ length: 7 }).map((_, index) => {
            const day = addDays(startDate, index)
            console.log(day)
            return (
              <div
                key={index}
                className='ring-1 ring-gray-200 text-center font-bold bg-white py-2'>
                {format(day, dateFormat, { locale: es })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd')
        const cloneDay = day
        days.push(
          <div
            className={`flex ring-1 ring-gray-200 h-14 flex-col px-3 py-2 hover:bg-gray-100 cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? 'text-gray-400 bg-gray-50'
                : 'bg-white '
            } ${isToday(day, day) ? ' bg-gray-200' : ''}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}>
            <span
              className={`ml-auto flex h-6 w-6 items-center justify-center rounded-full 
              ${isSameDay(day, selectedDate) ? 'text-white bg-black' : ''} 
              ${isToday(day, day) ? ' text-white bg-my-primary' : ''}`}>
              {formattedDate}
            </span>
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div className='flex text-xs text-gray-700 lg:flex-auto'>
          <div key={day} className='isolate grid w-full grid-cols-7 gap-px '>
            {days}
          </div>
        </div>
      )
      days = []
    }

    return <div>{rows}</div>
  }

  const onDateClick = day => {
    setSelectedDate(day)
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1))
  }

  return (
    <div>
      <CardComponent>
        <div className=''>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      </CardComponent>
    </div>
  )
}
