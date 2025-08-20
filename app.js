function change(){

    const hiding = document.getElementById("hiding")
    const slider = document.getElementById('slider')
    slider.classList.add("slider")
    hiding.textContent="HBD!! Too fast? huh??"
    setTimeout(() => {
         hiding.textContent="No problem!!"
        slider.style.animationDuration="20s"
        slider.style.animationIterationCount= "infinite"
        
    }, 4000);

}