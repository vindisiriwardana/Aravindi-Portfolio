
document.querySelectorAll("nav a").forEach(link=>{	//select all links on navbar
    if(link.href === window.location.href){		//loop all links(Home, About, Education, Contact)
        link.style.color="#EAEAEA";
    }
});

// Typing effect
const text = ["IT Undergraduate", "Full-Stack Developer"];	//auto typing sentences like an array
let i=0, j=0, current="", isDeleting=false;			//is deleting = if is this delete mode or not 
const typingElement = document.querySelector(".typing");

if(typingElement){	
function type(){
    if(i < text.length){
        if(!isDeleting && j <= text[i].length){
            current = text[i].substring(0,j++);
        } else if(isDeleting && j>=0){
            current = text[i].substring(0,j--);
        }
        typingElement.innerHTML = current;

        if(j == text[i].length) isDeleting=true;
        if(j==0 && isDeleting){ isDeleting=false; i=(i+1)%text.length; }

        setTimeout(type,100);
    }
}
type();
}

// Contact Form
const form = document.querySelector("form");
if(form){
form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully ");
    form.reset();
});
}
