
const placeGateChevrons = (n, rx, ry, so, cw) =>{
        const gateChevrons = document.querySelectorAll(".gates__chevron");
        gateChevrons.forEach((element, index) => {
                const angle = 9.23076923077;
                element.style.transform = "rotate(" + (angle * index) + "deg)";
                element.style.top = String(ry + -ry * Math.cos((360 / n / 180) * (index + so) * Math.PI)) + 'px';
                element.style.left = String(rx + rx * (cw ? Math.sin((360 / n / 180) * (index + so) * Math.PI) : -Math.sin((360 / n / 180) * (index + so) * Math.PI))) + 'px';
 
        });
     
};

const init = () => {
        placeGateChevrons(39, 200, 200, 0, true);
}

init();