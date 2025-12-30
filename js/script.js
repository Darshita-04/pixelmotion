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

const horizontalScrollAnimation = () => {
  gsap.to(".slides", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -300,
    ease: "power2",
  })
}

const paraAnimation = () => {
    let chars = document.querySelectorAll(".message")
  .forEach(el => {
    
    el.innerHTML = el.textContent.split("").map((char) => `<span>${char}</span>`).join("");

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

const teamAnimation = () => {
  document.querySelectorAll(".listitem").forEach(item => {
    let pic = item.querySelector(".picture");
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
    })


    let blueLayer = item.querySelector(".blue-layer");
    item.addEventListener("mouseenter", (e) => {
      gsap.fromTo(blueLayer,
        {yPercent:-200}, 
        {
        yPercent:0,
        ease: "power2",
        duration: 0.5,
      })
    })



  item.addEventListener("mouseenter", (e) => {
    const rect = item.getBoundingClientRect();
    const fromTop = e.clientY < rect.top + rect.height / 2;

    gsap.fromTo(
      bg,
      { y: fromTop ? "-100%" : "100%" },
      { y: "0%", duration: 0.3, ease: "power2.out" }
    );
  });

  item.addEventListener("mouseleave", (e) => {
    const rect = item.getBoundingClientRect();
    const toTop = e.clientY < rect.top + rect.height / 2;

    gsap.to(bg, {
      y: toTop ? "-100%" : "100%",
      duration: 0.3,
      ease: "power2.in"
    });
  });



    
  })
}

const locomotive = () => {
  (function () {
      const locomotiveScroll = new LocomotiveScroll();
  })();
}

HeroAnimation();
horizontalScrollAnimation();
paraAnimation();
teamAnimation();
locomotive()





