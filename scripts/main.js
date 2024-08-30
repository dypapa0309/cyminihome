document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentDiv = document.getElementById('content');

    async function loadContent(page) {
        try {
            const response = await fetch(`pages/${page}.html`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.text();
            contentDiv.innerHTML = content;
        } catch (error) {
            console.error('Error loading page:', error);
            contentDiv.innerHTML = '<p>Error loading content. Please try again.</p>';
        }
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadContent(page);

            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // 초기 페이지 로드 (홈 페이지)
    loadContent('home');
});