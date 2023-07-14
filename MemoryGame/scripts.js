const gameboard=document.querySelector("#gameboard");
const arr = ["","","","","","","","","","","","","","","",""];
const mp={
     0:"images/angular.png",
     1:"images/cpp.png",
     2:"images/java.png",
     3:"images/python.png",
     4:"images/react.png",
     5:"images/solid.png",
     6:"images/spring.png",
     7:"images/vue.png",
     8:"images/angular.png",
     9:"images/cpp.png",
     10:"images/java.png",
     11:"images/python.png",
     12:"images/react.png",
     13:"images/solid.png",
     14:"images/spring.png",
     15:"images/vue.png"
};
var selectedItems=[];
function toggleImg(e,sq){
    console.log(sq);
  if(selectedItems.length==2){
   selectedItems=[];
  }
  var x = sq.getAttribute("id");
  if(selectedItems.length==0)selectedItems.push(sq);
  if(selectedItems.length==1 && selectedItems[0]!=sq){
    selectedItems.push(sq);
  }
  var image = sq.firstChild;
  image.setAttribute("src",mp[x]);
  if(selectedItems.length==2){
   if(selectedItems[0].firstChild.getAttribute("src")==selectedItems[1].firstChild.getAttribute("src")){
    selectedItems[0].replaceWith(selectedItems[0].cloneNode(true));
    selectedItems[1].replaceWith(selectedItems[1].cloneNode(true));
   
    }else{
        function solve(selectedItems){
            setTimeout(()=>{
                selectedItems[0].firstChild.setAttribute("src","images/code.png");
                console.log(selectedItems[0]);
                selectedItems[1].firstChild.setAttribute("src","images/code.png");
                console.log(selectedItems[1]);
               },2000);
        }
        solve(selectedItems);
    }
  }
}
function toggleEvent(e){
    toggleImg(e,sq);
}
function createBoard(){
    arr.forEach((cell,index)=>{
        const sq=document.createElement("div");
        sq.id=index;
        var elem = document.createElement("img");
        elem.setAttribute("src","images/code.png");
        elem.setAttribute("height", "200");
        elem.setAttribute("width", "200");
        sq.appendChild(elem);
        sq.addEventListener('click',(e)=>{
            toggleImg(e,sq);
        },true);
        gameboard.append(sq);      
    });
}
createBoard();

