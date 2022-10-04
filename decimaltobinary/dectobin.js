function convertToBinary(x) {
  x = document.getElementById("decimal").value;
  let bin = 0;
  let rem,
    i = 1;
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  document.getElementById("binary").value = bin;
}
