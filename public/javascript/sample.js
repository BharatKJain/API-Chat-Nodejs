function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}
function changeHomeColor(){
    colorInput = getRandomColor();
    document.getElementById("test").style.color=colorInput;

}
function main(){
    setInterval("changeHomeColor()",500);
}


main()
