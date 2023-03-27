
// Исходные данные по слайдеру (const)
const sliderItems = document.querySelectorAll('.slider__items-slide'),
    sliderLine = document.querySelector('.slider__items'),
    sliderDots = document.querySelectorAll('.slider__dots-item');

// Переменные    
let sliderCount = 0,
    sliderWidth;


// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);


// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider__items').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderItems.length + 'px';
    sliderItems.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderItems.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderItems.length - 1;

    rollSlider();
    thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('slider__dots-item--active'));
    sliderDots[index].classList.add('slider__dots-item--active');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})
