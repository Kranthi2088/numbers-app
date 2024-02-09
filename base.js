async function add(){
    let number1=document.getElementById("number1");
    let number2=document.getElementById("number2");
    let n= number1.value;
    let m= number2.value;
    const response = await fetch("https://arithmetic-service-kranthi2088.onrender.com/add/"+n+"/"+m);
    const sum = await response.json();
    
    document.getElementById('result').value = sum;
};