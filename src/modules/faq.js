const faqLinks = document.querySelectorAll('.faq__header-item');
const faqTabs = document.querySelectorAll('.faq__body-list');

faqLinks.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        faqLinks.forEach(element => {
            element.classList.remove('faq__header-item--active')
        })
        this.classList.add('faq__header-item--active');
        let navId = this.getAttribute('data-id');

        faqTabs.forEach(element => {
            element.classList.add('faq__body-list--hidden')
            let tabId = element.getAttribute('data-id');
            if (tabId == navId) {
                element.classList.remove('faq__body-list--hidden')
            }
        })
    })
});