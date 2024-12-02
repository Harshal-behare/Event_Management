///------------------------------------------------------//
// Setup ScrollTrigger
//------------------------------------------------------//
gsap.registerPlugin(ScrollTrigger);


let sections = gsap.utils.toArray(".about-banner-content");

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {

const timeline_1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".piller-secion-two",
        markers :false,
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
const timeline_2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".piller-secion-three",
        markers :false,
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
const timeline_3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".piller-secion-four",
        markers :false,
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });

    timeline_1
      .from(sections[0], { opacity: 1, duration: 60 })
      .to(sections[0], { opacity: 0, duration: 40 })
     
    timeline_2
      .from(sections[1], { opacity: 0, duration: 60 })
      .to(sections[1], { opacity: 0, duration: 40 })
     
    timeline_3
      .from(sections[2], { opacity: 0, duration: 60 })
      .to(sections[2], { opacity: 0, duration: 40 })

    const newTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".piller-secion-five",
        scrub: true,
        start: "top center",
        end: "60s",
      },
    });


    
    newTimeline.from('.about-banner-heading', { opacity: 1, duration: 7 });
    newTimeline.from('.about-banner-heading', { opacity: 1, duration: 7 });
    newTimeline.to('.about-banner-heading', { opacity: 1, duration: 7 });
    newTimeline.to('.about-banner-heading', { opacity: 0, duration: 12 });
  }

})


ScrollTrigger.matchMedia({

"(max-width: 768px)": function () {
      const newTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".piller-secion-four",
          scrub: true,
          start: "top center",
          end: "5s",
        },
      });
  
  
     
      newTimeline.from('.about-banner-heading', { opacity: 1, duration: 7 });
      newTimeline.from('.about-banner-heading', { opacity: 1, duration: 7 });
      newTimeline.to('.about-banner-heading', { opacity: 1, duration: 7 });
      newTimeline.to('.about-banner-heading', { opacity: 0, duration: 12 });



      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".piller-secion-four",
          scrub: true,
          start: "top center",
          end: "500s",
        },
      });


      fadeTl.from('.piller-gradient', { opacity: 1, duration: 7 });
      fadeTl.from('.piller-gradient', { opacity: 1, duration: 7 });
      fadeTl.to('.piller-gradient', { opacity: 1, duration: 7 });
      fadeTl.to('.piller-gradient', { opacity: 0, duration: 12 });

  
    }

  })
