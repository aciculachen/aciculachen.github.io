const container = document.getElementById('container');
const toggler = document.getElementById('toggler');

function setMenuOpen(open) {
    container.classList.toggle('toggled', open);
    toggler.setAttribute('aria-expanded', String(open));
}

toggler.addEventListener('click', function () {
    setMenuOpen(!container.classList.contains('toggled'));
});

document.querySelectorAll('#sidebar_nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        if (link.getAttribute('href').startsWith('#')) {
            document.querySelectorAll('#sidebar_nav .nav-link').forEach(function (item) {
                item.classList.remove('active');
            });
            link.classList.add('active');
        }
        setMenuOpen(false);
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && container.classList.contains('toggled')) {
        setMenuOpen(false);
        toggler.focus();
    }
});

// Bootstrap still handles the existing collapse and tab components.
if (window.jQuery) {
    window.jQuery('.collapse').on('show.bs.collapse hide.bs.collapse', function (event) {
        if (event.target !== this) return;
        const button = document.querySelector('[data-target="#' + this.id + '"]');
        button.querySelector('.Collapse_OpenerText').textContent =
            event.type === 'show' ? 'Hide' : 'More';
    });
}
