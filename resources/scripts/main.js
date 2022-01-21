window.onload = function() {
    //dimensions of the image for knowing how far to move it
    const imageRatio = (1638 / 3784).toPrecision(3);
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    if (mediaQuery.matches) {
        document.getElementById("bogart").style.bottom = -346.52 + "px";
        
        setTimeout(moveImageUp, 10000, -270, 1, "bogart");
        setTimeout(moveImageDown, 20000, -346.52, 2, "bogart");
    }

    //image size needs to be reduced for smaller screens, which changes travel distances
    else {
        document.getElementById("bogart").style.width = "100px";
        document.getElementById("bogart").style.bottom = -231 + "px";

        setTimeout(moveImageUp, 10000, -180, 1, "bogart");
        setTimeout(moveImageDown, 20000, -231, 2, "bogart");
    }
}

function moveImageUp(moveEndpoint, step, element) {
    
    let bottom_string = document.getElementById(element).style.bottom;
    let bottom = parseInt(bottom_string);
    if (bottom < moveEndpoint) {
        
        bottom += step;
        document.getElementById(element).style.bottom = bottom + "px";
    }
    else {
        return;
    }
    setTimeout(moveImageUp, 10, moveEndpoint, step, element);
    return;
}

function moveImageDown(moveEndpoint, step, element) {
    
    let bottom_string = document.getElementById(element).style.bottom;
    let bottom = parseInt(bottom_string);
    
    if (bottom > moveEndpoint) {
        
        bottom -= step;
        document.getElementById(element).style.bottom = bottom + "px";
    }
    else {
        return;
    }
    setTimeout(moveImageDown, 10, moveEndpoint, step, element);
    return;
}