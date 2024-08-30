document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.querySelector('#projects-content ul');
    const listItems = projectsList.querySelectorAll('li');

    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });

        item.addEventListener('click', function() {
            const projectName = this.querySelector('strong').textContent;
            const projectDesc = this.querySelector('p').textContent;
            alert(`${projectName}\n${projectDesc}`);
        });
    });
});