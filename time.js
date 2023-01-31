function showTime() {
    const date = new Date();
    let h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    let amPm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    let time = h + ":" + m + ":" + s + '' + amPm;
    document.getElementById("clock").innerHTML = time;
  }
  setInterval(showTime, 1000);