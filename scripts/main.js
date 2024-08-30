document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentDiv = document.getElementById('content');

    // CSS 사전 로딩 함수
    function preloadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    // 모든 페이지의 CSS 사전 로딩
    ['home', 'profile', 'projects', 'services', 'guestbook', 'challenges', 'resources'].forEach(page => {
        preloadCSS(`styles/pages/${page}.css`);
    });

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