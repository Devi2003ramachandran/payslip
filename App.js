// // Document.write("hii")\\

// document.getElementById("head").innerHTML="<li>HTML</li>";
// document.getElementById("head").innerText="<li>HTML</li>";
// //styling using
// document.getElementById ("head").style="color:red";
// document.getElementById("head").className="bg-primary text-write";

// var a=100;
// a=200;
// let b=200;
// b=300;
// const c=300;


// console.log(a)
// console.log(b)
// console.log(c)

// {
//     console.log(a)
//     console.log(b)
//     console.log(c) 
// }
// let a=100
// function demo(){
//     console.log("demo function"+a)
// }
// console.log(a);
// demo();
// console.log(a);
// let fronend="js";

// function other(){
//     console.log(a)
// }
// other();
// function scope
// function demo(){
//     let a=100;
// console.log(a);
// console.log("the value of a is:" +a);
// console.log("the value of a is:" ,a);
// console.log(` the value of a is: ${a}`);
// }
// block scope
// {
//     console.log(a)
//         console.log(b)
//         console.log(c)   
// }
// let a=1000;
// let b="1000";
// console.log(typeof(a+b));

// let firstvalue; //declare the value but not assign this undefind
// console.log(firstvalue);
// //null 
// let c=null;
// console.log(c);
// console.log(typeof(c));
//Array
// let a=[ 19,"deviga",true,undefined,12.8]
// console.log(a)
// console.log(a.length)
// console.log(typeof(a))

// user given the input
//document object model
// let itemlist=[];
// let additem=()=>{
//      let stocktitem=document.getElementById("item").value;
//      document.getElementById("item").value ="";
//      itemlist.push(stocktitem);
//      console.log(stocktitem);
//      document.getElementById("divid").innerHTML=itemlist;

// }
// document.getElementById("btnid").addEventListener('click',additem);

// let obj={
//     firstname:"deviga",
//     lastname:"r",
//     place:"gudalur",
//     skills:["msoffice","java","cloud"]
// };
// console.log(obj.lastname)
// console.log(obj["skills"][1]);

// let getdata=()=>{
//     let obj={
//         firstname:document.getElementById("firstid").value,
//         age:document.getElementById("ageid").value, 
//         dob:document.getElementById("dobid").value, 
//         data:function fun(){ console.log("hiiii")}
           
//     };
//     console.log(obj.firstname);
//     console.log(obj["age"]);
//     console.log(obj.dob);
//     console.log(obj.data);
// }
//     document.getElementById("btnid").addEventListener('click',getdata);
// console.log(10%20);
let calclu=()=>{
    let bp=parseInt(document.getElementById("bsicid").value);
    let hra=document.getElementById("hraid").value=bp*(10/100);
    let da=document.getElementById("daid").value =bp*(5/100);
    let travel=document.getElementById("travelid").value=bp*(15/100);
    let pf=document.getElementById("pfid").value=bp*(15/100)
hra=parseInt(hra);
da=parseInt(da);
travel=parseInt(travel);
pf=parseInt(pf);
let gross=document.getElementById("grid").value=bp+hra+da+travel+pf;
gross=parseInt(gross)
let net=document.getElementById("netid").value=gross-pf;
net=parseInt(net)
document.getElementById("one").innerHTML=`<tr><td>${bp}</td>
<td>${hra}</td>
<td>${da}</td>
<td>${travel}</td>
<td>${pf}</td>
<td>${gross}</td>
<td>${net}</td>
</tr>`
}

  



