import "./styles/main.styl";

import $ from "jquery";
import { TweenMax, Elastic, TimelineMax } from "gsap/TweenMax";

$(function () {

    let COLOR = {
        yellow: "rgb(255, 193, 7)",
        red: "rgb(239, 83, 80)",
        blue: "rgb(33, 150, 243)"
    };

    // Toggle Bar Animation
    let toggleAnimation = {
        whole: TweenMax.to($('.aside-toggle'), 1, {
            left: '-56px',
            ease: Back.easeInOut
        }).reverse(),
        topBar: TweenMax.to($('.aside-toggle .bar-top'), 0.8, {
            transform: 'rotate(45deg)',
            transformOrigin: 'left center',
            backgroundColor: 'rgba(255, 193, 7, 1)',
            ease: Bounce.easeOut
        }).reverse(),
        middleBar: TweenMax.to($('.aside-toggle .bar-middle'), 0.8, {
            width: '0',
            ease: Elastic.easeOut
        }).reverse(),
        bottomBar: TweenMax.to($('.aside-toggle .bar-bottom'), 0.8, {
            transform: 'translate(0, 4px) rotate(-45deg)',
            transformOrigin: 'left center',
            backgroundColor: 'rgba(255, 193, 7, 1)',
            ease: Bounce.easeOut
        }).reverse()
    };

    $(".aside-toggle").click(function (e) {

        if (toggleAnimation.whole.reversed()) {
            toggleAnimation.whole.play();
            toggleAnimation.topBar.play();
            toggleAnimation.middleBar.play();
            toggleAnimation.bottomBar.play();
        } else {
            toggleAnimation.whole.reverse();
            toggleAnimation.topBar.reverse();
            toggleAnimation.middleBar.reverse();
            toggleAnimation.bottomBar.reverse();
        }

    });

    // Hover Animation of Side Links in Menu
    $(".aside__container a").hover(function (e) {
        TweenMax.to(e.target.firstElementChild, 0.3, {
            width: '10px'
        });
    }, function (e) {
        TweenMax.to(e.target.firstElementChild, 0.3, {
            width: '0'
        });
    });

    // Click Animation of Side Links in Menu
    $(".aside__container a").click(function (e) {
        
        $(this).parent().find('a').removeClass();

        let dataColor = $(this).data("color");

        let colorClass = "active--" + dataColor;

        $(this).addClass("active " + colorClass);

        TweenMax.to(".main-section", 0.5, {
            backgroundColor: COLOR[dataColor]
        }).delay(0.6);

        const bubble = ".main-section .main-content .chat .bubble";

        const chat_tl = new TimelineMax();
        chat_tl.from(bubble, 1, { x: "50vw"}, 0);
        chat_tl.from(bubble, 1, { skewX: -20, ease: Elastic.easeOut.config(1.75, 0.1) }, 1);
        chat_tl.fromTo(bubble, 0.1, { borderTopLeftRadius: "2em", ease: Power4.easeOut }, { borderTopLeftRadius: "0.1em", ease: Power4.easeOut }, 1);

    });

});
