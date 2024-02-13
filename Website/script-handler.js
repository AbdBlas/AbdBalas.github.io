var projects = document.getElementById("projects");

for(let i=0 ; i<Projects.length;i++){
    
    var crrentProject = Projects[i];
    //div
    var projectt = document.createElement("div");
    var divsstyle = document.createAttribute("style"); 
    divsstyle.value ="display:inline-block;width: 300px; margin:10px";
    projectt.setAttributeNode(divsstyle); 

    //h3
    var title = document.createElement("h3");
    var titlenode =  document.createTextNode(crrentProject.title);
    title.appendChild(titlenode);

    //img

    var image =document.createElement("img");
    var source = document.createAttribute("src")
    source.value = crrentProject.img;
    image.setAttributeNode(source);
    var imgstyle = document.createAttribute("style");
    imgstyle.value = "width: 100px; height: 100px";
    image.setAttributeNode(imgstyle);
    
    //p

    var p = document.createElement("p");
    var pnode =  document.createTextNode(crrentProject.description);
    p.appendChild(pnode);
        

    projectt.appendChild(title);
    projectt.appendChild(image);
    projectt.appendChild(p);

    projects.appendChild(projectt);


}

