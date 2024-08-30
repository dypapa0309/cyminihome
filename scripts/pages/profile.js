document.addEventListener('DOMContentLoaded', function() {
    const profileList = document.querySelector('#profile-content ul');
    const listItems = profileList.querySelectorAll('li');

    // 각 리스트 아이템에 호버 효과 추가
    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#E0E0E0';
            this.style.cursor = 'pointer';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.cursor = 'default';
        });
    });

    // 리스트 아이템 클릭 시 추가 정보 표시
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const additionalInfo = this.getAttribute('data-info');
            if (additionalInfo) {
                alert(additionalInfo);
            }
        });
    });

    // info-table 관련 코드는 제거했습니다. 필요하다면 나중에 추가할 수 있습니다.
});