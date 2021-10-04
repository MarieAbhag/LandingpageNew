
//==============================================================
// ================= Global variables ==========================
//==============================================================

// a dummy array of commentObject --- can be loaded from another source
var commentsArray = [
    {
        writername: "Lao Tzu",
        date:"21.01.2020",
        topic: "The journey of a thousand miles begins with one step."
    } ,
    {
        writername: "Joe Kennedy",
        date:"15.07.2020",
        topic: "That which does not kill us makes us stronger."
    },
    {
        writername: "Friedrich Nietzsche",
        date:"15.05.2021",
        topic: "When the going gets tough, the tough get going."
    }
]

// a dummy array of numbers represents rating values
// [5star, 4star, 3star, 2star, 1star]
var ratingResArr = [100, 63, 30, 12, 2];

// numbe of the sections that should be added to the nav-menu 
//let numOfLandingSections = document.getElementsByClassName("landingSection").length;
let numOfLandingSections = 0;

// array of html components contains the titles-input of the user-defined sections
let titels = ["Section1","Section2","Section3","Section4","Section5"];

ShowMainPageWithUserSetup();
// ============================================================================

//==============================================================
// ================= Functions for APIs ==========================
//==============================================================

// to show the main landing page
function ShowMainPageWithUserSetup()
{
    var mainDiv = document.querySelector("#mainDiv");
    mainDiv.scrollIntoView({behavior: 'smooth'});

    // looping over 5 sections
    for(var i = 0; i < 5; i++)
    {
        var newListItem= document.createElement("li");

        var newA= document.createElement("a");
        newA.setAttribute("id", "section"+ (i+1));
        newA.innerHTML = titels[i];
        newListItem.appendChild(newA);
        document.querySelector("#headerItems").appendChild(newListItem);
    }
    document.getElementById("floatingBtnToTop").style.display = "block";
}

// function to change active class for nav item and section
function ChangeActiveState(e) 
{
    RemoveActiveState("activeLanding");
    RemoveActiveState("active");
    var elmnt = document.getElementById(e.target.id +"usr");
    elmnt.scrollIntoView({behavior: 'smooth'});
    e.target.className = "active";
    elmnt.classList.add("activeLanding");
}


//==============================================================
// ================= Helper Functions ==========================
//==============================================================



// to scroll to the top
function GoToTop(){
    document.querySelector("#mainDiv").scrollIntoView({behavior:'smooth'});  
}

// to change the activate state on scrolling 
window.onscroll = function(){  
    RemoveActiveState("activeLanding");
    RemoveActiveState("active");
    var elmnt = document.getElementsByClassName("sec");
    if (elmnt.length > 0) 
    {
        for (let index = 0; index < elmnt.length; index++) 
        {
            elmnt[index].classList.remove("activeLanding");
            var rect = elmnt[index].getBoundingClientRect();
            
            if (rect.top >-200 && rect.top < 500) {
                elmnt[index].classList.add("activeLanding");
                var navItem = document.getElementById(elmnt[index].id.replace("usr", ""));
                navItem.classList.add("active");
            }

        }
    }
    
}

// to remove the active class from an element
function RemoveActiveState(className){
    var activeElm =  document.getElementsByClassName(className)
    if (activeElm.length>0) {
        activeElm[0].classList.remove(className);
    } 
}