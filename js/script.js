// video clipping + marquee animation 
const HeroAnimation = () => {
  gsap.set(".marquee", {scale: 5})

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    }
  })
  tl.to(".video", {
    '--clip': "0%",
    ease: "power2",
  }, 'a')
  .to(".marquee", {
    scale: 1,
    ease: "power2",
  }, 'a')
  .to(".lft", {
    xPercent: -10,
    stagger: 0.03,
    ease: "power2",
  }, 'b')
  .to(".rgt", {
    xPercent: 10,
    stagger: 0.03,
    ease: "power2",
  }, 'b')
}

// horizontal stats scrolling animation
const horizontalScrollAnimation = () => {
  gsap.to(".slides", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -300,
    ease: "power2",
  })
}

// card enlarge animation
const cardScrollig = () => {
  let cards = document.querySelectorAll(".cards__item");
  cards.forEach(card => {
    ScrollTrigger.create({
      trigger: card,
      start: "top center", // when top of card hits center of viewport
      end: "bottom center",
      onEnter: () => card.classList.add("active"),
      onEnterBack: () => card.classList.add("active"),
      // onLeave: () => card.classList.remove("active"),  // when bottom of the card passes the center of the viewport
      onLeaveBack: () => card.classList.remove("active"),
      // markers: true, // for debugging
    });
  });
}

// testimonial paragraph (reading) animation
const paraAnimation = () => {
    let chars = document.querySelectorAll(".message")
  .forEach(el => {
    
    el.innerHTML = el.textContent.split("").map((char) => `<span>${char}</span>`).join(""); // spitting paragraph into charctors and puting into span tag

    gsap.fromTo(el.querySelectorAll('span'), 
    {opacity: 0.2},
    {
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        end: "bottom center",
        scrub: 1, 
      },   
        stagger: 0.03,
        ease: "power2",
        opacity: 1,
      }
    )
  })
}

// team animation
const teamAnimation = () => {
  document.querySelectorAll(".listitem").forEach(item => {
    let pic = item.querySelector(".picture");
    let blueLayer = item.querySelector(".blue-layer");

    item.addEventListener("mousemove", (e) => {
      gsap.to(pic, {
        opacity: 1,
        scale: 1.1,
        x: gsap.utils.mapRange(0, window.innerWidth, -300, 300, e.clientX),
        ease: "power2",
        duration: 0.5,
      })
    })
    item.addEventListener("mouseleave", (e) => {
      gsap.to(pic, {
        opacity: 0,
        scale: 1,
        ease: "power2.out",
        duration: 0.5,
      })

      
      const rect = item.getBoundingClientRect();
      const fromTop = e.clientY < rect.top + rect.height / 2;
      let origin = fromTop ? "top center" :"bottom center";

      gsap.to(blueLayer,
      {
        "--transform-origin":origin,
        scaleY:0,
        ease: "power2",
        duration: 0.5,
      })
    })

    item.addEventListener("mouseenter", (e) => {
      const rect = item.getBoundingClientRect();
      const fromTop = e.clientY < rect.top + rect.height / 2;
      let origin = fromTop ? "top center" :"bottom center";
      gsap.to(blueLayer,
        {
        "--transform-origin":origin,
        scaleY:1,
        ease: "power2",
        duration: 0.5,
      })
    })
   
  })
}

// footer logo animation 
const logoAnimation = () => {
    let chars = document.querySelector(".footer-logo")
    console.log(chars.textContent)
    chars.innerHTML = chars.textContent.split("").map((char) => `<span class="relative">${char}</span>`).join(""); // spitting paragraph into charctors and puting into span tag

    gsap.fromTo(chars.querySelectorAll('span'), 
    {top: 100},
    {
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "top center",
        scrub: 3,
      },   
        stagger: 0.1,
        ease: "power2",
        top: 0,
      }
    )
}

// smooth scrolling
const locomotive = () => {
  (function () {
      const locomotiveScroll = new LocomotiveScroll();
  })();
}

// theme animation

const colorTheme = () => {
  document.querySelectorAll(".section")
  .forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center", // when top of card hits center of viewport
      end: "bottom center",
      onEnter: () => {
        document.body.setAttribute('theme',section.dataset.color)
      },
      onEnterBack: () => {        
        document.body.setAttribute('theme',section.dataset.color)
      },
      markers: true, // for debugging
    });
  });
}

// form validation
const form = document.querySelector('#contactForm');
const fields = form.querySelectorAll('input, textarea');
const successMessage = document.querySelector('#successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  fields.forEach(field => {
    const error = field.nextElementSibling; // the <p class="error-msg"> after the field
    if (field.value.trim() === '') {
      error.textContent = `Please enter your ${field.name}.`;
      error.classList.remove('hidden');
      valid = false;
    } else if (field.name === 'email') {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(field.value.trim())) {
        error.textContent = 'Please enter a valid email.';
        error.classList.remove('hidden');
        valid = false;
      } else {
        error.classList.add('hidden');
      }
    } else {
      error.classList.add('hidden');
    }
  });

  if (valid) {
    successMessage.classList.remove('hidden');
    form.reset();
    setTimeout(() => successMessage.classList.add('hidden'), 5000);
  }
});


HeroAnimation();
horizontalScrollAnimation();
paraAnimation();
teamAnimation();
locomotive()
cardScrollig()
logoAnimation();
colorTheme();



