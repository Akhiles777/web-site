import {useState} from 'react'



import './App.css'

import ProjectsSection from "./Projects-section.tsx";


import projects1 from '/assets/projects-1.png'

import projects2 from '/assets/projects-2.png'

import projects3 from '/assets/projects-3.png'



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

            <h3 className='projects-section-h3'>Проекты</h3>

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


        </div>
    )
}

export default App
