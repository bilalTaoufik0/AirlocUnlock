document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    const toggleMenu = () => {
        const isMenuOpen = menu.style.left === '0px';
        menu.style.left = isMenuOpen ? '-250px' : '0px';
    };

    menuToggle.addEventListener('click', toggleMenu);

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            if (menu.style.left === '0px') {
                menu.style.left = '-250px';
            }
        }
    });
});


function viewProject(projectName) {
    let url = '';
    switch(projectName) {
        case 'Projet 1':
            url = 'https://www.uvitec.co.uk/alliance-iris/3d-product-tour/';
            break;
        case 'Projet 2':
            url = '';
            break;
        default:
            console.error('Unknown project:', projectName);
            return;
    }
    window.open(url, '_blank');
}

function downloadProject(projectName) {
    let url = '';
    switch(projectName) {
        case 'Projet 3':
            url = './externe/Crypto-Shild.exe';
            break;
        default:
            console.error('Unknown project:', projectName);
            return;
    }
    window.location.href = url;
}


document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', () => {
        viewProject(button.getAttribute('data-project'));
    });
});

document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        downloadProject(button.getAttribute('data-project'));
    });
});

document.querySelector('.profile-header img').addEventListener('click', function() {
    this.classList.add('rotate-horizontal');
    setTimeout(() => {
        this.classList.remove('rotate-horizontal');
    }, 1000);
});