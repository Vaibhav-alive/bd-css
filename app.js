function change(){

    const hiding = document.getElementById("hiding")
    const slider = document.getElementById('slider')
    slider.classList.add("slider")
    hiding.textContent="HBD!! Sorry bhai thoda late ho gaya.. Too fast? huh??"
    setTimeout(() => {
         hiding.textContent="No problem!!, keep hovering!!!"
        slider.style.animationDuration="20s"
        slider.style.animationIterationCount= "infinite"
        
    }, 4000);

}