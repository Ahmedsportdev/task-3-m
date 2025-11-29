window.onload = () => {
    const w = screen.width;
    const h = screen.height;

    if (w <= 768) {
        // موبايل
        location = "https://ahmedsportdev.github.io/task-3-m/";
    } else {
        // كمبيوتر
        location = "https://ahmedsportdev.github.io/task-3-c/";
    }
};


var section_now = 0;
var btn_next = document.getElementById("forward");
var btn_prev = document.getElementById("backward");
var divs = document.querySelectorAll("div");
var len = 120; // المسافة اللي هتتحرك بيها العناصر بالـ translateX

// Buttons click
btn_next.onclick = forward;
btn_prev.onclick = backward;

// تحديث الـ view
function updateView(){
    divs.forEach((d, i) => {
        d.style.transform = `translateX(${(i - section_now) * len}%)`;
    });
    updateButtons();
}

// تعطيل الأزرار حسب الوضع
function updateButtons(){
    btn_prev.disabled = section_now === 0;
    btn_next.disabled = section_now === divs.length - 1;
}

// الانتقال للأمام
function forward(){
    if(section_now < divs.length - 1){
        section_now++;
        updateView();
    }
}

// الانتقال للخلف
function backward(){
    if(section_now > 0){
        section_now--;
        updateView();
    }
}

// Optional: دوال مساعدة
function num_of_div(def = "all"){
    if(def === "all") return divs.length;
    if(def === "last") return divs[divs.length - 1];
    if(def === "frist") return divs[0];
    if(def === "now") return divs[section_now];
}

// Initialize view
updateView();
