async function add() {
  let number1 = document.getElementById("number1");
  let number2 = document.getElementById("number2");
  let n = number1.value;
  let m = number2.value;
  const response = await fetch(
    "https://arithmetic-service-kranthi2088.onrender.com/add/" + n + "/" + m
  );
  const sum = await response.json();

  document.getElementById("result").value = sum;
}

async function isprime() {
  const numberToTest = document.getElementById("primenumber");
  let n = numberToTest.value;
  const response = await fetch(
    "https://primes-service-fgl9.onrender.com/primes/" + n
  );
  const result = await response.json();
  document.getElementById("primeCheckResult").innerText = result;
}

async function cipher() {
  const textToTest = document.getElementById("ciphertext");
  var str = textToTest.value;
  let shift = 3;
  const response = await fetch(
    "https://ciphers-service-kranthi2088.onrender.com/ciphers/ceaser/" +
      str +
      "/" +
      shift
  );
  const result = await response.json();
  document.getElementById("cipherCheckResult").innerText = result.ceaser;
}
