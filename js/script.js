const gateSymbols = document.querySelectorAll(".gates__symbol");

const rotateGateSymbols = () =>{
gateSymbols.forEach((element,index) => {
        const angle = 9.23076923077;
        element.style.transform = "rotate("+ (angle*index)+"deg)";
});
}

rotateGateSymbols();