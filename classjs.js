
var move_btn=document.getElementById("move")
var back_btn=document.getElementById("back")

var imgsrcs=[];


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>json.map((a)=>{
                imgsrcs.push(a.image)
            }))
            console.log(imgsrcs);




 var dd=["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
 "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
 "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
 "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
 
]    

/////////////////////////////////////////////////////

for(let i=dd.length-1;i>=0;i--){
var frame = document.getElementById("frame");
var image =document.createElement("img");
image.setAttribute("id",`${i}`);
image.classList.add("imgs")
frame.append(image)
image.style.zIndex=`${i}`;
image.src=dd[i]
}
////////////////////////////////////////////////////////////////////////
var num=dd.length-1

move_btn.addEventListener("click",()=>{
    var slide_img=document.getElementById(`${num}`);
    num--
    slide_img.style.transform= "translateX(400px)";
    slide_img.style.opacity="70%";
    if(num<dd.length-1){
        back_btn.style.visibility="visible"}
if(num<0){
    num=dd.length-1
for(let i=0;i<dd.length;i++){
    var all_img=frame.getElementsByClassName("imgs");
    all_img[i].style.transform= "translateX(0px)";
    all_img[i].style.opacity="100%";
    back_btn.style.visibility="hidden"
}}})
////////////////////////////////////////////////////////////////////////
back_btn.addEventListener("click",()=>{
    num++
    var slide_img=document.getElementById(`${num}`);
    slide_img.style.transform= "translateX(0px)";
    slide_img.style.opacity="100%";

if(num===dd.length-1){ back_btn.style.visibility="hidden"}
})

