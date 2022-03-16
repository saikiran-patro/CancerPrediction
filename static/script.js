

let f=0;
const Upload = () => {
f=document.getElementById("file").value;

f=f.slice(12)
let source='static/images/'+f
if(f!==0){
    
    document.getElementById("imageSource").setAttribute("src",source)
}

alert("File uploaded successfully")


}


