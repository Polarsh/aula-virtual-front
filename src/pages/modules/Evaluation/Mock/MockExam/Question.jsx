import { useState, useEffect } from 'react'

export default function QuestionMockExamComponent({
  question,
  onSelectOption,
}) {
  const [selectedOption, setSelectedOption] = useState(
    question ? question.selectedOption : ''
  )

  const handleOptionChange = event => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    onSelectOption(question.index, selectedValue) // Propaga el cambio al padre
  }

  // Utiliza useEffect para actualizar selectedOption cuando la pregunta cambie
  useEffect(() => {
    setSelectedOption(question ? question.selectedOption : '')
  }, [question])

  // Verifica si question está definido antes de intentar acceder a sus propiedades
  if (!question) {
    return (
      <div className='space-y-5'>
        <div className='font-bold text-xl'>Hay una falla</div>
      </div>
    )
  }

  return (
    <div className='space-y-5'>
      <div className='font-bold text-xl'>Pregunta {question.index}</div>
      <div className=''>{question.title}</div>
      {question.image && (
        <div className='flex justify-center items-center h-48'>
          <img
            src={question.image}
            alt='Imagen de pregunta'
            className=' max-h-full max-w-full'
          />
        </div>
      )}
      <fieldset aria-label='Answer'>
        <div className='space-y-5'>
          {question.options.map(option => (
            <div key={option.id} className='relative flex items-start'>
              <div className='flex h-6 items-center'>
                <input
                  id={option.id}
                  name={`option-${question.index}`}
                  type='radio'
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={handleOptionChange}
                  className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
              <div className='ml-3 text-sm leading-6'>
                <label
                  htmlFor={option.id}
                  className='font-medium text-gray-900'>
                  {option.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
