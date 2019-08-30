import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-conent">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam quidem, dolore rerum maxime delectus corporis alias harum itaque obcaecati minus esse ipsa, reiciendis, dicta numquam ullam quo doloribus sit!</p>
                </div>
                <div className="card-action grey lighten-4 grey-tr">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
