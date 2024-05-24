import { Link } from 'react-router-dom'

const classList = [
  {
    name: 'Anatomía Humana',
    description:
      'Comprende la estructura del cuerpo humano con nuestro curso de anatomía humana. Aprende sobre los sistemas esquelético, muscular, nervioso y más, con materiales visuales y prácticos que facilitan el aprendizaje.',
    to: 'anatomia-humana',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Anatomia%20Humana.png?alt=media&token=12345678-1234-1234-1234-123456789012',
    imageAlt: 'Anatomía Humana',
  },
  {
    name: 'Fisiología Humana',
    description:
      'Explora las funciones del cuerpo humano con nuestro curso de fisiología. Aprende cómo trabajan juntos los sistemas cardiovascular, respiratorio, renal y otros, para mantener la homeostasis.',
    to: 'fisiologia-humana',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Fisiologia%20Humana.png?alt=media&token=23456789-2345-2345-2345-234567890123',
    imageAlt: 'Fisiología Humana',
  },
  {
    name: 'Bioquímica',
    description:
      'Domina los fundamentos de la bioquímica con nuestro curso. Entiende los procesos químicos esenciales que ocurren en el cuerpo humano y cómo afectan la salud y la enfermedad.',
    to: 'bioquimica',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Bioquimica.png?alt=media&token=34567890-3456-3456-3456-345678901234',
    imageAlt: 'Bioquímica',
  },
  {
    name: 'Microbiología y Parasitología',
    description:
      'Aprende sobre los microorganismos y parásitos que afectan la salud humana. Este curso cubre bacteriología, virología, micología y parasitología con un enfoque clínico.',
    to: 'microbiologia-parasitologia',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Microbiologia.png?alt=media&token=45678901-4567-4567-4567-456789012345',
    imageAlt: 'Microbiología y Parasitología',
  },
  {
    name: 'Inmunología',
    description:
      'Entiende el sistema inmunológico humano y cómo protege el cuerpo contra enfermedades. Aprende sobre la respuesta inmune, inmunodeficiencias y enfermedades autoinmunes.',
    to: 'inmunologia',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Inmunologia.png?alt=media&token=56789012-5678-5678-5678-567890123456',
    imageAlt: 'Inmunología',
  },
  {
    name: 'Genética Médica',
    description:
      'Descubre cómo la genética influye en la salud y la enfermedad. Este curso cubre los principios de la genética humana, incluyendo la herencia, las mutaciones genéticas y la genética de las enfermedades.',
    to: 'genetica-medica',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Genetica%20Medica.png?alt=media&token=67890123-6789-6789-6789-678901234567',
    imageAlt: 'Genética Médica',
  },
  {
    name: 'Farmacología ',
    description:
      'Estudia cómo los medicamentos interactúan con el cuerpo humano para tratar enfermedades. Aprende sobre farmacocinética, farmacodinámica y el uso racional de medicamentos.',
    to: 'farmacologia',
    icon: 'UserGroupIcon',
    imagePath:
      'https://firebasestorage.googleapis.com/v0/b/test-variety-e3beb.appspot.com/o/Farmacologia.png?alt=media&token=78901234-7890-7890-7890-789012345678',
    imageAlt: 'Farmacología',
  },
]

export default function MyClassesPage() {
  return (
    <div className='shadow border rounded-md'>
      <div className='mx-auto px-5 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 text-base leading-7 lg:mx-0 lg:max-w-none'>
        {classList.map((course, index) => (
          <Link
            key={'/videoteca/mis-clases/' + course.name}
            to={course.to}
            className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
            <div className='relative bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-56'>
              <img
                src='/background.svg'
                alt={course.imageAlt}
                className='h-full w-full object-cover object-center sm:h-full sm:w-full'
              />
            </div>

            <div className='flex flex-1 flex-col space-y-2 p-4'>
              <h3 className='text-base font-bold text-my-primary'>
                <span aria-hidden='true' className='absolute inset-0' />
                {course.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
