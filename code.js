/*class Human{
 
    gender = "male";
    
     
     printMyGender = () => { 
       console.log(this.gender);
     }
   }
   
class Person extends Human{
    
       
       name = "Aixa";
       gender = "wolper"
       
     printMyName = () =>{
       console.log(this.name);
     }
}
   
const person = new Person();
   person.printMyName();
   person.printMyGender();
   
const numbers = [1, 2 ,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person2 = {
  name: "Aixa"
}

const newPerson = {
  ...person2,
  age: 30
}

console.log(newPerson);

const filter = (...arg) => {
return arg.filter(el => el === 1);
}

console.log(filter(1, 2, 5));

const hoySeCulea = () => true;*/



class cuerpo{
    constructor (name){
        this.name = name;
    
    }

    tieneGanas = () => {
        const res = prompt("Primero lo primero... ¿Tenés ganas?");
        if (res == "sí"){
            return true;
        } else{
            alert("No hay nada qué hacerle...")
            return false;
        }
    }
}

class cuerpoGestante extends cuerpo {
    dia = 0; 
   
estaIndispuesta = () =>{
    const res = prompt("¿Ella está indispuesta? sí/no")
   
    if (res == "no") {
        return false;
    } 
       
    if (res == "sí"){
         this.dia = prompt("¿En qué día del ciclo está?");
         } if (this.dia > 4){
            alert("Se puede se puede ;)");
            return false;
            }else{
                if (this.dia < 5)
                alert("Ups! capaz que No, che!");
                return true;
   
}
 }}


class cuerpoEyaculante extends cuerpo {

    tieneTrabajo = () => {
        const res = prompt("¿Tenés trabajo, puerco? sí/no");
        if (res == "sí"){
            alert("Será para otra vez entonces :)")
            return true;
        } else{
            alert("Puede ser entonces ♥")
            return false;
        }
    }  

    contestaLosMsjs = () => {
        const res = prompt("¿le has contestado los mensajes?")
        if (res == "sí"){
            alert("Genial! Entonces se pueden poner de acuerdo!")
            return true;
        } else{
            alert("What?! No duermas, cerdo!")
            return false;
        }
    }
}






const res = prompt("Howis! Dinos tu nombre!");
const cuerpo1 = new cuerpoEyaculante(res);
const saludo = document.querySelector(".saludo");

saludo.removeAttribute("hidden");
saludo.innerHTML = `Bienvenido, ${cuerpo1.name}! Veamos si hoy vas a tener suerte! ;)`;


const res2= prompt("¿Cómo se llama ella");
const cuerpo2 = new cuerpoGestante(res2);
const saludo2 = document.querySelector(".saludo2");


saludo2.removeAttribute("hidden");
saludo2.innerHTML =`${cuerpo2.name}! Qué bonito nombre! Mandale saludos de nuestra parte!`;


botoncito = document.querySelector(".botoncito");

botoncito.addEventListener("click", asking);
c1 = document.querySelector(".c1");
c2 = document.querySelector(".c2");

function asking(){
 

if (cuerpo1.tieneGanas() && !cuerpo2.estaIndispuesta() && !cuerpo1.tieneTrabajo() && cuerpo1.contestaLosMsjs()){
    alert("Bieeeen! PRobablemente tengas suerte!!")
    c1.removeAttribute("hidden");
}else{
    alert("mmmmmmm... capaz que hoy no...")
    c2.removeAttribute("hidden");
}

}

