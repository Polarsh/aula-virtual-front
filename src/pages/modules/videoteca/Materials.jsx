import CardComponent from '../../../components/Card/Card'
import HeaderCardComponent from '../../../components/Card/HeaderCard'
import NoContentComponent from '../../../components/NoContent'

const response = [
  { title: 'Infectología', url: 'https://www.google.com/' },
  { title: 'Respiratorio', url: 'https://www.google.com/' },
  { title: 'Cardiología', url: 'https://www.google.com/' },
  { title: 'Mortalidad', url: 'https://www.google.com/' },
]

export default function MaterialsPage() {
  const materialList = response

  const renderDocumentList = materials => {
    return (
      <div className='mt-5 grid grid-cols-4 gap-5'>
        {materials.map((material, index) => (
          <div
            key={index}
            className='h-36 flex flex-col items-center justify-center bg-gray-50 rounded-md cursor-pointer'
            onClick={() => window.open(material.url, '_blank')}>
            <div className='flex justify-center'>
              <img
                src='/pdfFile.svg'
                alt={material.title}
                className='h-24 w-24 object-cover object-center'
              />
            </div>
            <div className='text-base mt-2 text-center'>{material.title}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='space-y-10'>
      <CardComponent>
        <HeaderCardComponent
          title='Materiales'
          subtitle='Accede a una variedad de materiales educativos diseñados para complementar tu aprendizaje.'
        />
        {materialList.length > 0 ? (
          renderDocumentList(materialList)
        ) : (
          <NoContentComponent />
        )}
      </CardComponent>
    </div>
  )
}
