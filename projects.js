const projects = [{
    name: 'PROJECT ONE',
    type: 'WEB DESIGN',
    pos: 'start',
    image: 'https://images.unsplash.com/photo-1534488821539-74be34b3e521?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    name: 'PROJECT TWO',
    type: 'GRAPHIC DESIGN',
    pos: 'mid',
    image: 'https://images.unsplash.com/photo-1542361344-51be80003665?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    name: 'PROJECT THREE',
    type: 'TYPE DESIGN',
    pos: 'end',
    image: 'https://images.unsplash.com/photo-1612510920030-b4faeff7240f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    name: 'PROJECT FOUR',
    type: 'WEB DESIGN',
    pos: 'mid',
    image: 'https://images.unsplash.com/photo-1585502056777-ac4f25e8cc16?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    name: 'PROJECT FIVE',
    type: 'WEB DESIGN',
    pos: 'end',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    name: 'PROJECT SIX',
    type: 'GRAPHIC DESIGN',
    pos: 'mid',
    image: 'https://unsplash.com/photos/empty-street-surrounded-by-houses-uhxF0cDcWU4'
},
{
    name: 'PROJECT SEVEN',
    type: 'WEB DESIGN',
    pos: 'start',
    image: 'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    name: 'PROJECT EIGHT',
    type: 'WEB DESIGN',
    pos: 'end',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}]

const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement("div");
        panel.classList.add("project", `${project.pos}`)

        let imageContainer = document.createElement("div")
        imageContainer.className = `image__container`

        let image = document.createElement("img");
        image.classList.add("project__image");
        image.src = project.image;

        let projectDetails = document.createElement("div");
        projectDetails.classList.add("project__details");
        
        let projectTitle = document.createElement("p");
        projectTitle.innerText = project.name

        let projectType = document.createElement("p");
        projectType.innerText = project.type

        projectDetails.append(projectTitle, projectType )

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails)
        
        document.querySelector(".projects__slider").appendChild(panel)
    })
}

export {
    createProjects
}

