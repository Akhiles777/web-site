
function ProjectsSection(props:any) {
    return (
    <div>
        <div className='projects-section'>
            <div className={props.projects}>
                <div></div>
            </div>
            <h4>{props.description}</h4>
            <p>Подробнее</p>
        </div>




    </div>
    )
}
export default ProjectsSection;