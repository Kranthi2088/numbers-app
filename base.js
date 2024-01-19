function add(){
    let number1=document.getElementById("number1");
    let number2=document.getElementById("number2");
    let result=Number(number1.value)+Number(number2.value);
    document.getElementById("result").value=result;
};