var init=1;
var a1="a1", a2="a2", a3="a3", b1="b1", b2="b2", b3="b3", c1="c1", c2="c2", c3="c3"; 

function accion(boton){
 if(boton.className=="boton"){
  boton.className="clicked";
  var text;
  if(init%2==0){
   text="X";
  }else{
   text="O";
  }
  boton.value=text;
  boton.appendChild(document.createTextNode(text));
  init++;
  asignation(text,boton);
 }
}
var asignacion = 0;
function asignation(text,boton){
 if(a1==boton.name){
  a1=text;
  asignacion++; 
 }
 else if(a2==boton.name){
  a2=text;
  asignacion++;
 }
 else if(a3==boton.name){
  a3=text;
  asignacion++;
 }
 else if(b1==boton.name){
  b1=text;
  asignacion++;
 }
 else if(b2==boton.name){
  b2=text;
  asignacion++;
 }
 else if(b3==boton.name){
  b3=text;
  asignacion++;
 }
 else if(c1==boton.name){
  c1=text;
  asignacion++;
 }
 else if(c2==boton.name){
  c2=text;
  asignacion++;
 }
 else if(c3==boton.name){
  c3=text;
  asignacion++;
 }
 validation(text);
}

function validation(text){
 if((a1==a2 && a2==a3)||(a1==b2 && b2==c3)
  ||(a3==b2 && b2==c1)||(b1==b2 && b2==b3)
  ||(c1==c2 && c2==c3)||(a1==b1 && b1==c1)
  ||(a2==b2 && b2==c2)||(a3==b3 && b3==c3)){
  var init=confirm("FELICIDADES GANASTES "+ text +"\n VAMOS ! JUEGA OTRA VEZ !!");
  if(init==true){
   window.location.reload();
  }
 }
 //muestra si hay empate
 else if(asignacion==9){
  alert("EMPATE !! \n iNTENTENLO DENUEVO");
  window.location.reload();
 }
 }
