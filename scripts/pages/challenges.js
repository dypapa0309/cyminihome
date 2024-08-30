document.addEventListener('DOMContentLoaded', function() {
    const challengesList = document.querySelector('#challenges-content ul');
    const listItems = challengesList.querySelectorAll('li');

    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });

        item.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('a');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });
});