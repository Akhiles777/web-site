
function ProjectsSection(props:any) {
    return (
    <div>
        <div className='projects-section'>
            <div className={props.projects}></div>
            <h4>{props.description}</h4>

            <p>Подробнее</p>
        </div>



        <div className='projects-section'>

        </div>
    </div>
    )
}
export default ProjectsSection;