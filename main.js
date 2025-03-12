/*=============== SHOW SIDEBAR ===============*/
const navMenu =document.getElementById('sidebar'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target'),
    tabcontent = document.querySelectorAll('[data-content')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabcontent.forEach(tabcontents => {
                tabcontents.classList.remove("skills__active")
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })

            tab.classList.add('skills__active')
        })
    })



/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration:300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click",activeWork))

/*===== Work Popup =====*/
document.addEventListener("click",(e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfoliopopup();
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfoliopopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfoliopopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src =portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns =document.querySelectorAll('.services__button'),
      modalCloses=document.querySelectorAll('.services__modal-close')

let modal = function(modalclick) {
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalbtn, i) => {
    modalbtn.addEventListener('click', () => {
        modal(i)
    })
})


modalCloses.forEach((modalclose) => {
    modalclose.addEventListener("click",() => {
        modalViews.forEach((modalview) => {
            modalview.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "")  {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input)  => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    let scrollY= window.pageYOffset;

    sections.forEach(current  =>  {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY  <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' +  sectionId +  ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*='  + sectionId  +  ']').classList.remove('active-link')
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/
