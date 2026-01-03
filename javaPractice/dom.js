let x = document.getElementsByClassName("oldImg");

for(let i =0; i<x.length; i++){
    x[i].src="assets/creation_3.jpeg";
    console.dir(`value of ${i} is changed`);
}