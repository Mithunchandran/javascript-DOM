const form=document.getElementById("formfield")
form.addEventListener('submit',gettemperature)

function gettemperature(event){
event.preventDefault()

const latitudeinput=document.getElementById("latitude")
const latitudeEntered=latitudeinput.value
const longitudeinput=document.getElementById('longitude')
const longitudeEntered=longitudeinput.value


const url="https://api.open-meteo.com/v1/forecast?latitude="+latitudeEntered+"&longitude="+longitudeEntered+"&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
fetch(url)
.then (responce =>responce.json())
.then(showtemperature)
.catch(showerror)
}

function showtemperature(data){
    const temperature=(data.current_weather.temperature)
    const temp=document.getElementById("temp")
    //console.log(temp)
    temp.innerHTML = temperature
}

function showerror(error){
    console.log("some error occured")
} 
 function goToNextPage(){
    window.location.href="weather.html";
}

 function formValidation(){
    const password=document.getElementById('password').value
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    if(name.length === 0){
        alert ("error")
        return false
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)===false){
        alert("enter a valid email")
        return false
    }
    if(password.length < 8){
        alert("password must be 8 letters")
        return false
    }
    else{
        goToNextPage()
    }
    return false;
 }
  