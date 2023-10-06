const frame=document.getElementById("frame")
frame.addEventListener("keydown",(e)=>{console.log(e.code);
    if(e.code=="Space")
    {frame.classList.add("picture2");frame.classList.remove("picture1");setTimeout(()=>alert("Na geht doch! 😏"), 2000)}

    else{alert("Oh mein Gott, biste blöde... 🙈🙈🙈")}


})