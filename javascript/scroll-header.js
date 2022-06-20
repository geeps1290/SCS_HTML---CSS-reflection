
const body = document.body;
let lastScroll = 0;

// while 

window.addEventListener('scroll', () => {

    // console.log(window.pageYOffset)

    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.scroll-header');

    // console.log(header);

    // if (currentScroll < 211) {
    //     header.classList.add("absolute-header")
    //     header.classList.remove("fixed-header")
    // } else {
    //     header.classList.remove("absolute-header")
    //     header.classList.add("fixed-header")
    // }

    if (currentScroll <= 211) {
        header.classList.add("absolute-header")
        header.classList.remove("fixed-header")
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && currentScroll > 211) {
        header.classList.remove("absolute-header")
        header.classList.add("fixed-header")
        
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
});

// !body.classList.contains("scroll-down")