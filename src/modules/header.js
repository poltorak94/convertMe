document.querySelectorAll('.header__nav-list-item-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let modalLink = anchor.closest('.header__nav-list-item--modal');
        if (modalLink) {
            document.querySelector('.modal').classList.add('modal--open');
            document.querySelector('body').classList.add('body--modal')
            this.closest('.header').classList.remove('header--opened')

        } else {
            document.querySelectorAll('.header__nav-list-item').forEach(e => {
                e.classList.remove('header__nav-list-item--active')
            });
            this.closest('.header__nav-list-item').classList.add('header__nav-list-item--active')
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            this.closest('.header').classList.remove('header--opened')
        }

    });
});

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth >= 768) {
        document.querySelectorAll('section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
                document.querySelectorAll('.header__nav-list-item').forEach((el) => {
                    if (el.classList.contains('header__nav-list-item--active')) {
                        el.classList.remove('header__nav-list-item--active');
                    }
                });

                // document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
                document.querySelectorAll('.header__nav-list-item')[i].classList.add('header__nav-list-item--active')
            }
        });
    }
});

document.querySelector('.header__burger').addEventListener('click', function (e) {
    e.preventDefault();
    let container = this.closest('.header').classList.toggle('header--opened')
})