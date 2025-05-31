let links = []
links = document.querySelectorAll(".link");

links.forEach(alinks =>{
    alinks.addEventListener('click',(e)=>{
        links.forEach(rlink=>{
            rlink.classList.remove('active');

        });

        console.log(e.target);
        e.target.classList.add('active');
    });

});


function isElementVisible(element) {
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    const viewportTop = window.pageYOffset;
    const viewportBottom = viewportTop + window.innerHeight;

    return (
        elementBottom > viewportTop &&
        elementTop < viewportBottom
    );
}

const home = document.getElementById('home');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects')
const education = document.getElementById('education');
const contact = document.getElementById('contact');

window.addEventListener('scroll', () => {
    if (isElementVisible(home)) {
        links.forEach(rlink=>{rlink.classList.remove('active')});
        links[0].classList.add('active');
    }
    else if(isElementVisible(skills)){
        links.forEach(rlink=>{rlink.classList.remove('active')});
        links[1].classList.add('active');
    }
    else if(isElementVisible(projects)){
        links.forEach(rlink=>{rlink.classList.remove('active')});
        links[2].classList.add('active');
    }
    else if(isElementVisible(education)){
        links.forEach(rlink=>{rlink.classList.remove('active')});
        links[3].classList.add('active');
    }
    else if(isElementVisible(contact)){
        links.forEach(rlink=>{rlink.classList.remove('active')});
        links[4].classList.add('active');

    }

});
