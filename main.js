document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(tabId) {
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (document.getElementById(hash)) {
            switchTab(hash);
        }
    } else {
        const firstTab = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTab);
    }
});