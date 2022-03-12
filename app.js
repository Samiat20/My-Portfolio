const projects= [
    {
    name: "Todo",
    description:"This is a todo app where you can register your daily, weekly or general tasks ",
    link:"https://wonderful-goodall-dede27.netlify.app/",
    img:'./img/projects/todo.png'
    },
    {
        name: "The gang",
        description:"This is a fan page for cartoon characters",
        link: "https://condescending-meninsky-b3526e.netlify.app/",
        img:"./img/projects/shapes.png" 
    }
]

//populate the projects section
// grab the section
var project= document.querySelector(".projects")
console.log('x')
projects.forEach(x=>{

  var div =  document.createElement("div")
  div.className="project"
  div.innerHTML=`<a href="${x.link}" target="_blank"> <img src="${x.img}" alt="The Gang"></a>
  <h2> ${x.name} </h2>
  <p> Description: "${x.description}"</p>`
  project.appendChild(div)
})
//create a loop to create the a,img,p,h2 element
// create a function to populate the section with the element created in the loop
// append the elements as a child of the section
