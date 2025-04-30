


import './App.css'

import ProjectsSection from "./Projects-section.tsx";


import ProjectsSection2 from './Projects-section-2.tsx'




import './960.css'


import './390.css'


function App() {

    return (
        <div className='container'>

            <header>
                <ul>
                    <li className='o-nas'>О НАС</li>

                        <li>Проекты</li>

                    <li>Услуги</li>
                    <li>Контакты</li>
                </ul>


                <div className='container-1'>
                    <h1>Современные и стильные интерьеры для комфортной жизни</h1>
                    <div>
                        <p>Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и
                            реализацией
                            дизайн-проектов</p>
                    </div>
                </div>


                <div className='container-2'>

                    <h3>О нас</h3>

                    <h2>Студия основана в 2011 году. Полностью отдаемся проектированию и реализации интерьеров. К нам
                        обращаются за уютом, индивидуальными решениями и практичностью. Находим конструктивные решения
                        для
                        каждого интерьера, вплоть до каждой детали — нацелены на результат.</h2>

                    <button>Посмотреть услуги</button>
                </div>
            </header>

            <h3 className='projects-section-h3' id='projects'>Проекты</h3>

            <ProjectsSection
                projects={'projects1'}
                description={'ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023'}
            />

            <ProjectsSection

                projects={'projects2'}
                description={'ЖК НОРВЕЖСКИЙ ПАРК — 75 М² — 2023'}/>

            <ProjectsSection
                projects={'projects3'}
                description={'ЖК СОСНОВСКИЕ ОЗЕРА — 94 М² — 2022'}

            />


            <button className='btn'>Смотреть все проекты</button>

            <div className="projects-section-2">

                <h2>Услуги</h2>

                <div className='projects-section-2-1'>
                    <div>
                        <div className='projects-content'>
                            <div className='projects-section-price'>от 2500₽/м²</div>
                        </div>
                        <h3 className='projects-content-left'>Планировочное решение </h3>
                    </div>

                    <div>
                        <div className='projects-content-2'>
                            <div className='projects-section-price'>от 3000₽/м²</div>
                        </div>
                        <h3 className='projects-content-right'>Дизайн-проект </h3>
                    </div>
                </div>


                <div className='projects-section-2-2'>
                    <div className='projects-content-2-2-title'>
                        <div className='projects-content'>
                            <div className='projects-section-price'>от 30 000₽/мес</div>
                        </div>
                        <h3 className='projects-content-left'>Авторский надзор</h3>
                    </div>


                    <div>
                        <div className='projects-content-2'>
                            <div className='projects-section-price edit'>5% от стоимости</div>
                        </div>
                        <h3 className='projects-content-left-2'>Комплектация </h3>
                    </div>
                </div>

                <button className='btn'>Заказать услугу</button>
            </div>


        </div>
    )
}

export default App
