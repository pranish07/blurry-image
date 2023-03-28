const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

const blurringEffect = () => {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1,0 );
  bg.style.filter = `blur(${scale(load,0, 100, 0, 30)}px)`
};

let interval = setInterval(blurringEffect, 30);

blurringEffect();

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
