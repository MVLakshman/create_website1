function upDate(previewPic){
  document.getElementById("main-image").src = previewPic.src;
  previewPic.style.opacity = "0.5";
}
   
function unDo(previewPic){
  document.getElementById("main-image").src = "project/gallery/10.jpg";
  previewPic.style.opacity = "1.0";
}