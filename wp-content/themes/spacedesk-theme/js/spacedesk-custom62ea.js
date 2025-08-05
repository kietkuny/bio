jQuery(window).load(function() {
	//initPage();
	
	// preloader
    setTimeout(function() { 
		jQuery('.preloader').addClass('loaderout');
	}, 1200);
    setTimeout(function() { 
		jQuery('.preloader').hide();
		jQuery('.preloader').removeClass('loaderout');
	}, 2000);
		
});

;(function() {
	
	
	// flush cash
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
	

    // locomotive scroll 
    var loco_scroll = {};
    var chck_if_loco_scroll_loaded = setInterval(function() {

        if (window.sfe_loco_scroll && Object.keys(window.sfe_loco_scroll).length !== 0 && window.gsap && window.ScrollTrigger) {

            loco_scroll = window.sfe_loco_scroll;

            gsap.registerPlugin(ScrollTrigger);

            goGsap();

            // clear
            clearInterval(chck_if_loco_scroll_loaded);
        } else {
			w.sfe_loco_scroll.scroll.destroy(); 
		}
    }, 400);
		
	
	//swiper
	var cfswiper = new Swiper(".cflow", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		mousewheel: false,
		freeMode: true,
		minimumVelocity: 0.001,
		sticky: true,
		coverflowEffect: {
			rotate: 18,
			stretch: 100,
			depth: 150,
			modifier: 1.077,
			slideShadows: false,
		},
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
	  	},
		pagination: {
			el: '.swiper-pagination'
		},
		breakpoints: {
			1300: {
			pagination: {el: ''},
			effect: 'coverflow', 
			coverflowEffect: {
				rotate: 18,
				stretch: 100,
				depth: 150,
				modifier: 1,
				slideShadows: false
				},
			}
		},
	});
	cfswiper.autoplay.stop();
	
	if ( document.querySelector('.cflow') ){
		new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				observer.disconnect();
				cfswiper.autoplay.start();
			}
		}).observe(document.querySelector('.cflow'));	
	}
	
	jQuery('.cflow').on('mouseenter', function(e){
		//console.log('stop autoplay');
		cfswiper.autoplay.stop();
	})
	jQuery('.cflow').on('mouseleave', function(e){
		//console.log('start autoplay');
		cfswiper.autoplay.start();
	});	 
	
	
	var ytswiper1 = new Swiper("#ytclips1", {
		effect: "slide",
		spaceBetween: 25,
		grabCursor: true,
		centeredSlides: false,
		slidesPerView: "auto",
		mousewheel: false,	
		loop: true,
		direction: 'horizontal',		
		freeMode: true,
		freeModeMomentum: false,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
			reverseDirection: true,
	  	},
		speed: 7000,   							
	});
	var ytswiper2 = new Swiper("#ytclips2", {
		effect: "slide",
		spaceBetween: 25,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		mousewheel: false,		
		loop: true,
		direction: 'horizontal',	
		freeMode: true,
		freeModeMomentum: false,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,			
	  	},  	
		speed: 7000,
	});
	
	
	jQuery('#ytclips1').on('mouseenter', function(e){
		//console.log('stop autoplay');
		ytswiper1.autoplay.stop();
	  })
	jQuery('#ytclips1').on('mouseleave', function(e){
		//console.log('start autoplay');
		ytswiper1.autoplay.start();
	 });
	
	jQuery('#ytclips2').on('mouseenter', function(e){
		//console.log('stop autoplay');
		ytswiper2.autoplay.stop();
	  })
	jQuery('#ytclips2').on('mouseleave', function(e){
		//console.log('start autoplay');
		ytswiper2.autoplay.start();
	 });
	 
	
	
	// yt
	function loadYT() {
	  var swiper1 = document.getElementById('ytclips1');
  	  var slides1 = swiper1.getElementsByClassName('swiper-slide');
		
	  var swiper2 = document.getElementById('ytclips2');
  	  var slides2 = swiper2.getElementsByClassName('swiper-slide');
		
	  for (var i=0; i < slides1.length; i++) {
		var elem = slides1[i].getElementsByClassName('yt-player')[0];
		var id = elem.getAttribute('data-id');
			
		jQuery(elem).css('background-image', 'url(/wp-content/uploads/'+id+'.jpg');
		jQuery(elem).find('a').attr('href', 'https://www.youtube.com/watch?v='+id);		
	  }
		
	  for (var i=0; i < slides2.length; i++) {
		var elem = slides2[i].getElementsByClassName('yt-player')[0];
		var id = elem.getAttribute('data-id');
			
		jQuery(elem).css('background-image', 'url(/wp-content/uploads/'+id+'.jpg');
		jQuery(elem).find('a').attr('href', 'https://www.youtube.com/watch?v='+id);		
	  }		
		
	};
	
	if ( document.getElementById('ytclips1') ) {
		loadYT();
	}
	
	
	
	// menu
	jQuery('.menu-toggle').on('click', function(e){
		
		setTimeout(function() { 
		
			if ( (jQuery('[data-elementor-device-mode="mobile"]').length > 0) || (jQuery('[data-elementor-device-mode="tablet"]').length > 0) ) { 

				if (jQuery('.langs').css('display') == 'none') {
					jQuery('.langs').fadeIn();
				}
			}
			
		}, 500);	
	});
	jQuery('.menu-close').on('click', function(e){
		
		if ( (jQuery('[data-elementor-device-mode="mobile"]').length > 0) || (jQuery('[data-elementor-device-mode="tablet"]').length > 0) ) { 
			
			if (jQuery('.langs').css('display') == 'block') {
				jQuery('.langs').fadeOut();
			}
		}
	});
	
	
	
	// langs	
	jQuery('.langs .select').on('click', function(e){
		jQuery('.langs .widget_polylang ul').fadeToggle();
	});
	jQuery('.langs .widget_polylang ul').after().click(function(e){
		jQuery('.langs .widget_polylang ul').fadeToggle();
	});
	
	
	
	// random teaser
	var teas = Math.floor(Math.random()* 6)+ 1;
	jQuery('.teaser'+teas).addClass('teaser-show');

	
	
	// scrollto		
	if (window.location.hash) {
		var elm = window.location.hash;
		setTimeout(function() {
			window.sfe_loco_scroll.update();				
		}, 100);
		setTimeout(function() {
			window.sfe_loco_scroll.scrollTo(elm);				
		}, 1500);
	}
	
	
	jQuery('.btn.scrollto a').attr('data-scroll-to', '');
	
	
	// scrollup	
	jQuery('.scrollup').on('click', function(e){
		window.sfe_loco_scroll.scrollTo('main');		
	});
	
	
	
    function goGsap() {	

        /* DON'T CHANGE THIS */  		
        loco_scroll.on('scroll', ScrollTrigger.update);		

        ScrollTrigger.scrollerProxy('.sfe-locomotive-scroll-wrapper', {
            scrollTop(value) {
                return arguments.length ? loco_scroll.scrollTo(value, 0, 0) : loco_scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: document.querySelector('.sfe-locomotive-scroll-wrapper').style.transform ? 'transform' : 'fixed'
        });		
		
		ScrollTrigger.config({
			ignoreMobileResize: true,
		});
        /* DON'T CHANGE THIS END */

		
		
        // START ANIMS	
		
		
		
		// prlx
		jQuery('.bg-holo .ob-pseudo-after').attr('data-scroll', '');
		jQuery('.bg-holo .ob-pseudo-after').attr('data-scroll-speed', '0.9');
		
		jQuery('.bg-holo2 .ob-pseudo-after').attr('data-scroll', '');
		jQuery('.bg-holo2 .ob-pseudo-after').attr('data-scroll-speed', '0.9');
		
		jQuery('.site-footer .holo').attr('data-scroll', '');
		jQuery('.site-footer .holo').attr('data-scroll-speed', '0.9');
		
		
		jQuery('.features-vid-right .elementor-background-video-container').attr('data-scroll', '');
		jQuery('.features-vid-right .elementor-background-video-container').attr('data-scroll-speed', '0.3');
		jQuery('.features-vid-right .elementor-background-video-container').attr('data-scroll-direction', 'horizontal');
		
		jQuery('.features-vid-left .elementor-background-video-container').attr('data-scroll', '');
		jQuery('.features-vid-left .elementor-background-video-container').attr('data-scroll-speed', '-0.3');
		jQuery('.features-vid-left .elementor-background-video-container').attr('data-scroll-direction', 'horizontal');
		/*
		jQuery('.header-vid .elementor-background-video-container').attr('data-scroll', '');
		jQuery('.header-vid .elementor-background-video-container').attr('data-scroll-sticky', '');
		jQuery('.header-vid .elementor-background-video-container').attr('data-scroll-target', '#main');
		*/
		jQuery('.header-vid .elementor-background-video-container').attr('data-scroll', '');
		jQuery('.header-vid .elementor-background-video-container').attr('data-scroll-speed', '-5');
		
		jQuery('.header-prlx .ob-pseudo-before').attr('data-scroll', '');
		jQuery('.header-prlx .ob-pseudo-before').attr('data-scroll-speed', '-5');
		
		
	
		
		
		// logo			
        gsap.fromTo('.site-branding', {
			scale: 1,
			opacity: 1,
			xPercent: 0,
			yPercent: 0,
			ease: 'none',
        },{
			scale: 1,
			xPercent: 0,
			yPercent: -104,
            scrollTrigger: {
                scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
                trigger: '.site-branding',
                start: 'top top',
				end: '99%',
				scrub: true,
				toggleActions: 'restart none none reset',
            }
        });
		
				
		
		
		// nav
		var navtl = gsap.timeline({
           paused: 'true'
        });
		
        navtl.to('.nav-container',{
            duration: 1,
            x: 0,
            ease: 'expo.inOut'
        });
		
        navtl.fromTo('#primary-menu li',{
            yPercent: 100,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        },{            
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			yPercent: 0,
			duration: 0.5,
  			stagger: {
				each: 0.1
			},			
        });		

        navtl.fromTo('.nav-container .widget',{
            yPercent: 50,
            opacity: 0
        },{
            duration: 0.8,
            opacity: 1,
			yPercent: 0,
 			stagger: {
				each: 0.1
			},
            ease: 'expo.out',
        },
        '-=0.5');
		
       navtl.fromTo('#header .menu-social-img a',{            
            opacity: 0
        },{
            duration: 0.3,
            opacity: 1,
			yPercent: 0,
 			stagger: {
				each: 0.1
			},
            ease: 'expo.in',
			//onComplete: pausenav,
        },
        '-=0.5');
		
        navtl.fromTo('#secondary-menu li',{
            yPercent: 50,
            opacity: 0
        },{
            duration: 0.8,
            opacity: 1,
			yPercent: 0,
 			stagger: {
				each: 0.1
			},
            ease: 'expo.out',
			//onComplete: pausenav,
        },
        '-=0.5');
	
		
		function opennav(){
            navtl.timeScale(1).play();
        }
		function closenav(){
            navtl.timeScale(1.75).reverse();
        }
		function pausenav(){
            navtl.timeScale(1).pause();
        }
		
		const btn_open = document.querySelector(".menu-toggle");
		const btn_close = document.querySelector(".menu-close");
		
		btn_open.addEventListener("click", (evnt) => {
			opennav();
		});
		btn_close.addEventListener("click", (evnt) => {
			closenav();
		});
		
		
		
		
		// home intro
        gsap.fromTo('.intro-title', {
            opacity: 0,
			x: -50,
			ease: 'power1.inOut',
        },{
			opacity: 1,            
			x: 0,
			duration: 1,
			delay: 1.1,
			ease: 'power1.inOut',
        });			
		
        gsap.fromTo('.driver-box', {
            opacity: 0,
			x: 20,
			ease: 'power3.in',
        },{
			opacity: 1,            
			x: 0,
			duration: 1.3,
			delay: 1.2,	
			ease: 'power3.out',
        });
		
				
		
		
		// zoomin
		const ftvids = document.querySelectorAll('.features-vid-right video');				
		ftvids.forEach(function(vid) {
		
			gsap.fromTo(vid, {
				opacity: 0,
				scale: 0.9,
			},{
				opacity: 1,            
				scale: 1.2,
				duration: 1,
				delay: 0.3,
				ease: 'power1.inOut',
				scrollTrigger: {
					scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
					trigger: vid,
					start: 'top 75%',
					end: 'center center',
					scrub: true,
					toggleActions: 'restart none none reset',
				}
			});
		});		
		
		const ftvids2 = document.querySelectorAll('.features-vid-left video');				
		ftvids2.forEach(function(vid) {
		
			gsap.fromTo(vid, {
				opacity: 0,
				scale: 0.9,
			},{
				opacity: 1,            
				scale: 1.2,
				duration: 1,
				delay: 0.3,
				ease: 'power1.inOut',
				scrollTrigger: {
					scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
					trigger: vid,
					start: 'top 75%',
					end: 'center center',
					scrub: true,
					toggleActions: 'restart none none reset',
				}
			});
		});
		
		
		
		
		// rotator		
		let rototypeSplit = new SplitType('.rotator', {
			types: 'words',
			tagName: 'span'
		});
		
		const words = document.querySelectorAll('.rotator > .word');
		
		var rotatl = gsap.timeline({ 
			repeat: -1, 
			repeatDelay: 0,
		});
		
		TimelineLite.prototype.wait = function(position) {
			return this.set({}, {}, position);
		};
						
		rotatl.timeScale(0.75); 
		
		if (words[0]) {
			gsap.set('.rotator', {
				width: words[1].offsetWidth,
			});	

			rotatl.fromTo(words[0], {
				duration: 0.75, 
				yPercent: -50,
				autoAlpha: 0,
			},{ 					
				autoAlpha: 1,
				yPercent: 0,
				ease: 'power4.inOut',
			});	

			rotatl.to('.rotator', {
				duration: 0.5, 
				width: words[0].offsetWidth, 
				//delay: 0.1, 
				ease: 'power4.out',
			});


			rotatl.wait('+=1.2');


			rotatl.fromTo(words[0], {
				duration: 0.75, 
				yPercent: 0,
				autoAlpha: 1,
			},{ 					
				autoAlpha: 0,
				yPercent: 50,			
				ease: 'power4.inOut',
			});		

			gsap.set(words[0], {
				yPercent: -50,
				autoAlpha: 0,
			});		

			rotatl.fromTo(words[1], {
				duration: 0.75, 
				yPercent: -50,
				autoAlpha: 0,
			},{ 					
				autoAlpha: 1,
				yPercent: 0,			
				ease: 'power4.inOut',
			});	

			rotatl.to('.rotator', {
				duration: 0.5, 
				width: words[1].offsetWidth, 
				//delay: 0.1, 
				ease: 'power4.out',
			});


			rotatl.wait('+=1.1');


			rotatl.fromTo(words[1], {
				duration: 0.75, 
				yPercent: 0,
				autoAlpha: 1,
			},{ 					
				autoAlpha: 0,
				yPercent: 50,			
				ease: 'expo.inOut',
			});		

			gsap.set(words[1], {
				yPercent: -50,
				autoAlpha: 0,
			});
		}
 
		
		
		// boxes in		
        gsap.fromTo('.gs-appear', {
            opacity: 0,
			scale: 0.95,
			y: 0,
			ease: 'power3.inOut',
        },{
			opacity: 1,
            scale: 1,
			y: 0,
			duration: 0.7,
			stagger: {
				each: 0.2,
				from: 'start'
			},
            scrollTrigger: {
                scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
                trigger: '.gs-appear',
                start: 'top 90%',
				end: 'center center',
				scrub: true,
				toggleActions: 'restart none none reset',
            }
        });		
		
		
		// appear intro		
        gsap.fromTo('.gs-appear-intro', {
            opacity: 0,
			scale: 0.95,
			y: 0,
			ease: 'power1.inOut',			
        },{
			opacity: 1,
            scale: 1,
			y: 0,
			delay: 1.6,
			stagger: {
				each: 0.25,
				from: 'start'
			},
        });
		
		
		
		// box flip	
		gsap.set('.gs-flip', {
			transformPerspective: 1000
		});
		gsap.set('.gs-flip .e-con-inner', {
			transformPerspective: 1200
		});
        gsap.fromTo('.gs-flip', {
            opacity: 0,
			rotationX: 90,
			ease: 'power3.inOut',
        },{
			opacity: 1,
            rotationX: 0,			
            scrollTrigger: {
                scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
                trigger: '.gs-flip',
                start: 'top 80%',
				end: '+=200px',
				scrub: true,
				toggleActions: 'restart none none reset',
            }
        });
		
        gsap.fromTo('.gs-flip .e-con-inner', {
            opacity: 0,
			rotationX: 70,
			y: -40,
			ease: 'power1.inOut',			
        },{
			opacity: 1,
            rotationX: 0,
			y: 0,
            scrollTrigger: {
                scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
                trigger: '.gs-flip .e-con-inner',
                start: 'top 80%',
				end: '+=400px',
				scrub: true,
				toggleActions: 'restart none none reset',
            }
        });
		
		
		
		
		// text reveal	
		let headtypeSplit = new SplitType('.gs-reveal h3', {
			types: 'words',
			tagName: 'span'
		});	
		
		const headreveal = document.querySelectorAll('.gs-reveal h3 .word');
		
		headreveal.forEach( function(revtitl, i) {					
				
			gsap.fromTo(revtitl, {
				yPercent: 100,	
				clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
			},{
				clipPath: 'polygon(0 -20%, 100% -20%, 100% 100%, 0 100%)',
				yPercent: 0,					
				stagger: {
					each: 0.9,
					ease: 'expo.inOut',
				},
				scrollTrigger: {
					scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
					trigger: revtitl,
					start: 'top 80%',
					end: '+=300px',
				}
			})
			
        });
				
		
		let typeSplit = new SplitType('.gs-reveal p', {
			types: 'words',
			tagName: 'span'
		});
		
		const txtreveal = document.querySelectorAll('.gs-reveal p .word');
		
		txtreveal.forEach( function(txt, i) {				
							
			gsap.fromTo(txt, {
				yPercent: 100,
				clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
			},{
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				yPercent: 0,	
				stagger: {
					each: 0.9,
					ease: 'expo.inOut',
				},
				scrollTrigger: {
					scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
					trigger: txt,
					start: 'top 75%',
					end: '+=100px',
				}				
			})
        });
		
		
		
		// text reveal intro
		let headtypeSplit2 = new SplitType('.gs-reveal-intro h3, .gs-reveal-intro h2', {
			types: 'words',
			tagName: 'span'
		});	
					
		gsap.fromTo('.gs-reveal-intro h3 .word, .gs-reveal-intro h2 .word', {
			yPercent: 100,
			clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
		},{
			clipPath: 'polygon(0 -20%, 100% -20%, 100% 100%, 0 100%)',
			yPercent: 0,
			delay: 1.3,
			stagger: {
				each: 0.1,
				ease: 'expo.in',
			},
		});
		
		
		let typeSplit2 = new SplitType('.gs-reveal-intro p', {
			types: 'lines',
			tagName: 'span'
		});			
							
		gsap.fromTo('.gs-reveal-intro p .line', {
			yPercent: 100,
			clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
		},{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			yPercent: 0,
			delay: 1.3,
			stagger: {
				each: 0.15,
				ease: 'expo.inOut',
			},			
		});
		
		
		
		// fade		
		const fades = document.querySelectorAll('.gs-fade');
		
		fades.forEach( function(fde, i) {	
			
			gsap.fromTo(fde, {
				opacity: 0,
			},{
				opacity: 1,
				stagger: {
					each: 0.2,
					ease: 'expo.in',
				},
				scrollTrigger: {
					scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
					trigger: fde,
					start: 'top 75%',
					end: '+=100px',
				}				
			})
        });
		
		
		
		//fade line
		gsap.to('.release', {
			'--lineScale': 1,
			ease: 'power1.in',			
			scrollTrigger: {
				scroller: '.sfe-locomotive-scroll-wrapper', // MUST !
				trigger: '.release',
				start: 'top 60%',
				end: '+=300px',
				scrub: true,
				toggleActions: 'restart none none reset',
			}				
		});
		
		
		
		// fade intro				
		gsap.fromTo('.gs-fade-intro', {
			opacity: 0,
		},{
			opacity: 1,
			delay: 1.4,
			stagger: {
				each: 0.2,
				ease: 'expo.in',
			},
		});
		
		
		

		// page trans		
		const nav_btns = document.querySelectorAll('.menu a, .driver-box a, .btn-link a');
				
		nav_btns.forEach(function(elem) {
			elem.addEventListener("click", function(ev){				
				ev.preventDefault();
				closenav();
				
				setTimeout(function(){
					jQuery('.preloader').addClass('loaderin');
					jQuery('.preloader').show();
				}, 200);
				
				var newPage = elem.getAttribute('href');
				setTimeout(function(){
					location.href = newPage;
				}, 1000);
			});
		});
		
		
		
		// dl btns
		const dlbox = gsap.utils.toArray('.dl-box');
		
		dlbox.forEach((item) => {
			let dlbtn = item.querySelector('.btn-dload');
			let boxtl = gsap.timeline({ paused: true });
			
			boxtl.to(item, { 
				'--boxScale': 1.02,
				duration: 0.4, 
				ease: 'power1.out',
			});
			
			dlbtn.addEventListener('mouseenter', () => boxtl.timeScale(1).play(0) );
			dlbtn.addEventListener('mouseleave', () => boxtl.timeScale(1.5).reverse() );

		});
		
		


        // END ANIMS
		

        /* DON'T CHANGE THIS */ 
		new ResizeObserver(() => loco_scroll.update()).observe( document.querySelector("[data-scroll-container]") );	
		
        ScrollTrigger.addEventListener('refresh', () => loco_scroll.update());
        ScrollTrigger.refresh();      
        /* DON'T CHANGE THIS END */

    }

})(); 