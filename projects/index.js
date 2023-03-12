const SERVER_

let projects;
window.addEventListener('load', () => {
    fetch('http://localhost:3000/projects')
        .then(response => response.json())
        .then(data => {
            projects = data;
            console.log(projects)
        })
        .catch(err => console.error(err));
    const
}
)


