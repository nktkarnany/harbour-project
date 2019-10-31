import "./styles/main.styl";

import $ from "jquery";
import { TweenMax, Elastic, TimelineMax } from "gsap/TweenMax";

$(function () {

    // Toggle Bar Animation
    let toggleAnimation = {
        topBar: TweenMax.to($('.aside-toggle .bar-top'), 0.8, {
            transform: 'rotate(45deg)',
            transformOrigin: 'left center',
            ease: Back.easeIn.config(1.7)
        }).reverse(),
        middleBar: TweenMax.to($('.aside-toggle .bar-middle'), 0.4, {
            width: '0',
            ease: Circ.easeOut
        }).reverse(),
        bottomBar: TweenMax.to($('.aside-toggle .bar-bottom'), 0.8, {
            transform: 'translate(0, 9px) rotate(-45deg)',
            transformOrigin: 'left center',
            ease: Back.easeIn.config(1.7)
        }).reverse()
    };

    $(".aside-toggle").click(function (e) {
        if (toggleAnimation.topBar.reversed()) {
            toggleAnimation.topBar.play();
            toggleAnimation.middleBar.play();
            toggleAnimation.bottomBar.play();

            $(".main-menu").addClass("active");
        } else {
            toggleAnimation.topBar.reverse();
            toggleAnimation.middleBar.reverse();
            toggleAnimation.bottomBar.reverse();

            $(".main-menu").removeClass("active");
        }
    });

    // Footer hover animation
    $(".social-media li a").hover(function (e) {
        TweenMax.to(e.currentTarget, 0.3, {
            color: "rgba(60, 61, 71, 1)"
        });
    }, function (e) {
        TweenMax.to(e.currentTarget, 0.3, {
            color: "rgba(60, 61, 71, 0.6)"
        })
    });

    addBubble("Hi! I am Ankit, I am a front end web developer.");

    function addBubble(text) {
        const bubble = $("<div></div>");
        bubble.addClass("bubble");
        bubble.text(text);
        $(".chat").append(bubble);

        const chat_tl = new TimelineMax();
        chat_tl.from(bubble, 1.2, { x: "65vw", ease: Power4.easeOut }, 0.3);
        chat_tl.from(bubble, 1, { skewX: -20, ease: Elastic.easeOut.config(1.3, 0.2) }, 1);
        chat_tl.fromTo(bubble, 0.1, { borderTopLeftRadius: "1.6em", ease: Power4.easeOut }, { borderTopLeftRadius: "0.1em", ease: Power4.easeOut }, 1);
    }

});
