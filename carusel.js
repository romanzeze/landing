(function () {
    const slides = [
        `<div class="carousel-slide">
            <p class="carousel-slide-text">Name:</p>
            <p class="carousel-slide-text">Jumanji</p>
            <p class="carousel-slide-text">Players:</p>
            <p class="carousel-slide-text">4-9</p>
            <p>It all started as in the same-name movie: you started a game that brought you to real
                jungles!
                Everything is strange, poisoned and willing to kill you here.
                Now you are in a hunter's house but it's not safe here. Can you find your way out
                from the
                killing
                jungles?
                You better hurry - it's a life-or-death matter.
            </p>
            <a href="#">Learn More</a>
            <a href="#">See More Quests</a>
        </div>
        <div class="carousel-slide-img">
            <img src="img/our-rooms-jumanji.png" alt="Jumanji">
        </div>`,
        `<div class="carousel-slide">
            <p class="carousel-slide-text">Name:</p>
            <p class="carousel-slide-text">Crazy Scientist</p>
            <p class="carousel-slide-text">Players:</p>
            <p class="carousel-slide-text">4-7</p>
            <p>
                It was an ordinary day. You and your friends received an invitation to the party in an
                unfamiliar neighborhood.
                Everything was awesome until you were trapped in a strange room with flasks and
                suspicious
                devices.
                You understood that the host is a scientist and he didn't like that you nosed into his
                business.
                You felt it could be dangerous. How to save your life from a crazy scientist?
            </p>
            <a href="#">Learn More</a>
            <a href="#">See More Quests</a>
            <div class="carousel-slide-img">
                <img src="img/our-rooms-crazy-scientist.jpeg" alt="Crazy Scientist">
            </div>
        </div>`,
        ` <div class="carousel-slide">
        <p class="carousel-slide-text">Name:</p>
        <p class="carousel-slide-text">Sherlock Holmest</p>
        <p class="carousel-slide-text">Players:</p>
        <p class="carousel-slide-text">2-6</p>
        <p>
            Sherlock Holmes gives you the first clue to the unsolved Egyptian mystery.
            Somewhere in the room, you will find the key to the ancient myth.
            It will also be your clue to finding a way out.
            You are Sherlock Holmes' only hope to solving the mystery, so better get going — it's
            about
            to
            get real.
        </p>
        <a href="#">Learn More</a>
        <a href="#">See More Quests</a>
        <div class="carousel-slide-img">
            <img src="img/our-rooms-sherlock-holmes.png"  alt=" Sherlock Holmes">
        </div>`
    ]

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    renderSlides();

    const btnNext = document.querySelector('.carousel__btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.carousel__btn-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });


})();