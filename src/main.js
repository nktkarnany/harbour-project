import "./styles/main.styl";

import $ from "jquery";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

$(function () {

    $(".aside__container a").hover(function (e) {
        TweenMax.to(e.target, 0.3, {
            color: '#ff0000'
        });
        TweenMax.to(e.target.firstElementChild, 0.3, {
            width: '10px'
        });
    }, function (e) {
        TweenMax.to(e.target, 0.3, {
            color: '#000'
        });
        TweenMax.to(e.target.firstElementChild, 0.3, {
            width: '0'
        });
    });

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

});
