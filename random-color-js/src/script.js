function ale() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}
setInterval(ale, 1000)