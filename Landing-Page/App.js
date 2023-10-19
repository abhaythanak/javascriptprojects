// Shery.imageEffect("#back", {style:5, debug: true, gooey:true})

let elem = document.querySelectorAll("#elem")
elem.forEach(function(elem){
    let h1s = document.querySelectorAll("h1")
let index = 0;
document.querySelector("#main").addEventListener("click",Function (){
    gsap.to(h1s[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function (){
            gsap.set(this._targets[0], {top:"100%"})
        },
    });

    index === h1s.length - 1 ? (index = 0) : index++;

    gsap.to(h1s[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration:1,
    });
})
})
