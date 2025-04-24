document.querySelector('button').addEventListener('click', function(){
    document.body.classList.toggle("light");
    document.querySelector(".container").classList.toggle("light");

    document.querySelector(".matches").classList.toggle("light");
    document.querySelector(".upcoming").classList.toggle("light");

    document.querySelector(".container.about").classList.toggle("light");
})