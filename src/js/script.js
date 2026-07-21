const contactMeBtn = document.querySelector("#contact-me");
const contactME = document.querySelector("#contact");

contactMeBtn.addEventListener("click", () => {
    contactME.scrollIntoView ({ behavior : "smooth"});
});

const viewProjects = document.querySelector("#view-projects");
const projects = document.querySelector("#projects");
viewProjects.addEventListener("click", () =>{
    projects.scrollIntoView({ behavior: "smooth"});
});