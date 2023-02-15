
//history-API 
document.querySelector(".back-page").addEventListener("click", () => {
    history.back();
})
document.querySelector(".forward-page").addEventListener("click", () => {
    history.forward();
})
document.querySelector(".reload-page").addEventListener("click", () => {
    location.reload();
})
document.querySelector(".close-page").addEventListener("click", () => {
    if (confirm("Close Window?")) {
        window.close();
      }
})


// clock
setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();


    if (h <= 12) {
        document.querySelector(".clock .time").innerHTML = "AM";
        if (h < 10) {
            if (h == 0) {
                document.querySelector(".clock .hours").innerHTML = 12+" :";
            }else {
                document.querySelector(".clock .hours").innerHTML = "0"+h+" :";
            }
        }else {
            document.querySelector(".clock .hours").innerHTML = h+" :";
        }
    }else {
        document.querySelector(".clock .time").innerHTML = "PM";
        if (h < 22) {
            document.querySelector(".clock .hours").innerHTML = "0"+(h - 12)+" :";
        }else {
            document.querySelector(".clock .hours").innerHTML = (h - 12)+" :";
        }
    }


    if (m < 10) {
        document.querySelector(".clock .minutes").innerHTML = "0"+m+" :";
    }else {
        document.querySelector(".clock .minutes").innerHTML = m+" :";
    }


    if (s < 10) {
        document.querySelector(".clock .seconds").innerHTML = "0"+s;
    }else {
        document.querySelector(".clock .seconds").innerHTML = s;
    }

}, 1000);



// input search
document.querySelector("header .search button").addEventListener("click", () => {
    let button = document.querySelector("header .search button").className;

    if (button == "button") {
        document.querySelector("header .search input").style = "width:200px; padding:10px; border: 1px solid #eee;border-right: none;";
        document.querySelector("header .search button").style = "border-top-right-radius: var(--border-rad-btn);border-bottom-right-radius: var(--border-rad-btn); background-color:#eee;"
        document.querySelector("header .search button").classList.add("x");
    }else {
        document.querySelector("header .search input").style = "";
        document.querySelector("header .search button").style = "";
        document.querySelector("header .search button").classList.remove("x");
    }
});


// print-page
document.querySelector(".print-page").addEventListener("click", () => {
    window.print();
})



// hide & show
document.querySelector(".hide-page").onclick = () => {
    document.querySelector("header").style.display="none";
    document.querySelector("aside").style.display="none";
    document.querySelector(".show-page").style="display:block; color:var(--blue-color)";
}

document.querySelector(".show-page").onclick = () => {
    document.querySelector("header").style.display="flex";
    document.querySelector("aside").style.display="block";
    document.querySelector(".show-page").style.display="none";
}


// logo
document.getElementsByClassName("logo")[0].addEventListener("click", () => {
    let logo = document.querySelector("header .logo .dropdown").className;

    if (logo == "dropdown") {
        document.querySelector("header .logo .dropdown").style.display= "block";
        document.querySelector("header .logo .dropdown").classList.add("x");
    }else {
        document.querySelector("header .logo .dropdown").style.display= "";
        document.querySelector("header .logo .dropdown").classList.remove("x");
    }
})



// Latest Tasks
let task = Array.from(document.querySelectorAll(".tasks .row-tasks .task"));
let numbersTask = task.length;

for (let i=0; i < numbersTask; i++) {
    let classTask = "task t-"+[i];

    let buttonDelete = ".tasks ."+task[i].classList.item(1) + " i";
    
    document.querySelector(buttonDelete).addEventListener("click",() => {
        
        if (task[i].className == classTask) {
            task[i].classList.add("delete");
        }else {
            task[i].classList.remove("delete");
        }
    })
}


// scroll-top
let scrollop = document.querySelector(".scroll-top");

// targets-animation
let targets = document.querySelector(".targets");
let spanTargets = document.querySelectorAll(".targets span.prog-anim");

window.onscroll = () => {
    if (window.scrollY >= 500) {
        scrollop.style.display= "flex";
    }else {
        scrollop.style.display= "";
    }

    if (window.scrollY >= targets.scrollTop - 100) {
        spanTargets.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

scrollop.onclick = () => {
    window.scrollTo(
        {
            top:0,
            behavior:"smooth",
        }
    )
    this.style.opacity = "0";
}

let boxProjects = document.querySelector(".proj-box");
let spanProjects = document.querySelectorAll(".proj-box span.proj-anim");

window.onload = () => {
    spanProjects.forEach((span) => {
        span.style.width = span.dataset.width;
    })
}








