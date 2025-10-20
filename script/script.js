

//increase love functionality

const increaseLove = document.getElementsByClassName("love-increase");
let count = 0;

for (let i = 0; i < increaseLove.length; i++) {
  increaseLove[i].addEventListener("click", function() {
    count++;
    document.getElementById("increase-number").innerText = count;
    
  });
}

    const increaseCopy = document.getElementsByClassName("increase-copy");

    let copyCount = 0;

    for(let i = 0; i<increaseCopy.length;i++){
        increaseCopy[i].addEventListener("click", function(){
            alert("Coppied Successfull")
            copyCount++;
            document.getElementById("copy-number").innerText = copyCount;
        })
    }
