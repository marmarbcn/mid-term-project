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

    }

    const getProjectData = () => {
        fetch(url)
            .then(response => response.json())
            .then(response => showData(response))
    }

    getProjectData();
}
