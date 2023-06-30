// menu
let menuBtn = document.querySelector(".menu-btn");
let navigation = document.querySelector(".nav");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active")
    // lệnh chuyển đổi 2 giao diện
});

//video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
// queryselector khong khác j getdocument by id

let sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

//thanh tìm kiếm
//khai báo function tìm kiếm
function search_function(){
    //Giao diện của function tìm kiếm có 2 cái là thanh search (menu_search) và các ô kết quả (menu_item) nên vì vậy ta phải khai báo cho 2 cái này 2 biến. Trong đó, giá trị trả về các ô kết quả là một mảng nên phải thêm cú pháp Array.from()
        let menusearch = document.querySelector('#menu_search');
        let menuiteams = Array.from(document.querySelectorAll('.menu_item'));
    //Những chữ cái bắt đầu của các ô kết quả của chúng ta là chữ thường, vì vậy phải có một lệnh hạ từ chữ cái hoa chúng ta nhập vào ô input thành chữ cái thường
        menusearch.value = menusearch.value.toLowerCase();
    //Ẩn đi và hiện khi search
        menuiteams.forEach(function(el){
    //Khai báo một biến có tên text là chữ cái nhập vào ô tìm kiếm có tác dụng là lấy và nối giá trị text trong ô input của tất cả các text có trong element
            let text = el.innerText;
    //Nếu mà chứa từ khóa search thì sẽ hiện ra kết quả tìm kiếm
            if(text.indexOf(menusearch.value)>-1){
                el.style.display="";
            searchWrapper.classList.add("active");
            }
            
    //Nếu không chữ thì không hiện
            else 
            {el.style.display="none";
            searchWrapper.classList.remove("active");
        }
        })
    }
    
    // slow reveal
    // const sr = ScrollReveal ({
    //     distance: '65px',
    //     duration: 2600,
    //     delay: 450,
    //     reset: true
    // });
    // sr.reveal("h1,p", {delay: 200, origin: 'top'});