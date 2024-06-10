import CardComponent from '../../../components/Card/Card'
import HeaderCardComponent from '../../../components/Card/HeaderCard'
import NoContentComponent from '../../../components/NoContent'

const response = [
  { title: 'Manual de Infectología', url: 'https://www.google.com/' },
  { title: 'Manual de Respiratorio', url: 'https://www.google.com/' },
  { title: 'Manual de Cardiología', url: 'https://www.google.com/' },
  { title: 'Manual de Mortalidad', url: 'https://www.google.com/' },
]

export default function ManualsPage() {
  const manualList = response

  const renderDocumentList = manuals => {
    return (
      <div className='mt-5 grid grid-cols-4 gap-5'>
        {manuals.map((manual, index) => (
          <div
            key={index}
            className='h-36 flex flex-col items-center justify-center bg-gray-50 rounded-md cursor-pointer'
            onClick={() => window.open(manual.url, '_blank')}>
            <div className='flex justify-center'>
              <img
                src='/pdfFile.svg'
                alt={manual.title}
                className='h-24 w-24 object-cover object-center'
              />
            </div>
            <div className='text-base mt-2 text-center'>{manual.title}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='space-y-10'>
      <CardComponent>
        <HeaderCardComponent
          title='Manuales'
          subtitle='Accede a una colección completa de manuales que te guiarán a través de cada proceso y herramienta.'
        />
        {manualList.length > 0 ? (
          renderDocumentList(manualList)
        ) : (
          <NoContentComponent />
        )}
      </CardComponent>
    </div>
  )
}
