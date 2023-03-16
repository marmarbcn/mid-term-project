const url = 'http://192.168.0.21:3000/projects';

window.onload = () => {
    const getQueryUuid = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('uuid')
    }



    const showData = (projects) => {
        const project = projects.find((project) => project.uuid === getQueryUuid())
        document.querySelector('.projectTitle').textContent = project.name;
        document.querySelector('.main-project-img').src = project.image;
        document.querySelector('.main-project-img-back').src = project.image;
        document.querySelector('.projectSubtitle').textContent = project.description;
        document.querySelector('.projectCompleted span').textContent = project.completed_on;
        document.querySelector('.project').textContent = project.content;
        // OTHER PROJECTS
        // PROJECT 1
        const otherProject = projects.find((project) => project.uuid !== getQueryUuid())
        document.querySelector('.other-project-img').src = otherProject.image;
        document.querySelector('.other-title').textContent = otherProject.name;
        document.querySelector('.other-project-subtitle').textContent = otherProject.description;
        // PROJECT 2

    }

    const getProjectData = () => {
        fetch(url)
            .then(response => response.json())
            .then(response => showData(response))
    }

    getProjectData();
}
