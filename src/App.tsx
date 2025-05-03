

import {useState,useEffect} from "react";

import './App.css'

import ProjectsSection from "./Projects-section.tsx";


import './960.css'


import './390.css'


function App() {


    const [count, setCount] = useState<number>(1);

    const [size, setSize] = useState<string>('gallery-item');



    useEffect(() => {
        if (count === 1) setSize('gallery-item');
        if(count > 3) setCount(count - 3)
        if( count < 1) setCount(count + 3)
        else if (count === 2) setSize('gallery-2');
        else if (count === 3) setSize('gallery-3');
    }, [count]);


    const onCountClickPlus = () => setCount(count + 1);
    const onCountClickMinus = () => setCount(count - 1);




    console.log(count)

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


            <div className='otzivi'>

                <h3 className='otzivi-title'>Отзывы</h3>

                <div className='otzivi-1'>
                    <h2>Ксения, проект 65 кв.м.</h2>
                    <p>Хочу искренне поблагодарить Вас за работу, проделанную на высоком уровне! Нам с мужем было очень
                        приятно с Вами работать! Спасибо за Ваше умение правильно слышать пожелания своих клиентов и
                        выполнять работу, которая превосходит все ожидания! Мы даже не надеялись, что на 34 кв.м. кто-то
                        сможет нам грамотно разместить все, что мы хотим и даже больше!
                    </p>
                    <p> Вам удалось это просто превосходно! Нам лишь осталось воплотить красоту, которую Вы нам создали
                        в жизнь и поделиться с Вами результатом!</p>
                </div>

                <div className='otzivi-1 rigth'>
                    <h2>Регина, проект 89 кв.м.</h2>
                    <p>Спасибо большое за такой классный проект! Все стильно, круто, продумано! Очень приятно было с
                        вами работать! Спасибо, что терпели наши «хочу это, хочу то» в поисках идеального для нас
                        ремонта. Здорово, что мы нашли такого основательного, ответственного и внимательного к деталям
                        дизайнера!
                    </p>
                    <p> Хочется скорее реализовать проект и наслаждаться современной, функциональной и красивой
                        квартирой! Будем рекомендовать Вас всем друзьям и знакомым!</p>
                </div>
            </div>


            <div className='otzivi2'>
            <div className='otzivi-2'>
                    <h2>Яна, проект 120 кв.м.</h2>
                    <p>Хотелось бы сказать большое спасибо за проделанную работу! В задачу Марины входила разработка
                        дизайн-проекта в минимальные сроки, и мне, конечно, не хотелось при этом потерять качество
                        выполнения работы. Но волнения были напрасны: все вопросы решались оперативно, всегда
                        предлагалось несколько вариантов решения, а также предоставлялись комментарии, какой способ
                        решения будет более подходящим.
                    </p>
                    <p className='otzivi-edit'> В итоге проект был сдан в оговоренный срок, и мне просто не терпится
                        приступить к его реализации! Проект получился очень стильным и современным! Буду рекомендовать
                        Вас тем, кому еще предстоит это непростое дело - ремонт!</p>
                </div>
            </div>


            <div className='gallery'>
                <div className={size}>
                    <h2>ГАЛЕРЕЯ ПРОЕКТОВ</h2>

                    <button onClick={onCountClickMinus}>left</button>
                    <button onClick={onCountClickPlus}>rigth</button>

                    <p>Проект  Двухкомнатной квартиры в ЖК Лесной Пейзаж</p>
                </div>
            </div>


            <div className='contact'>

                <h2 className='contact-title'>Контакты</h2>

                <div className='contact-tel'>
                    <h2>Телефон:</h2>

                    <h3><a href='tel:'>+7 935 895-45-35</a></h3>
                </div>


                <div className='contact-mail'>
                    <h2>Почта:</h2>

                    <h3><a href='mailto:'>hello@mail.com</a></h3>
                </div>
            </div>


            <footer>
                <ul>
                    <li>О НАС</li>
                    <li>Проекты</li>
                    <li>Услуги</li>
                    <li>Контакты</li>
                </ul>

                <p>студия дизайна интерьера Метрика — 2023</p>
            </footer>

        </div>
    )
}

export default App



