
//gallery 탭
const dts = document.querySelectorAll("dt");
const dds = document.querySelectorAll("dd");

const dts_a = document.querySelectorAll("dt>a");

dts_a.forEach((el, index) => {
  el.addEventListener("focusin", () => {
    activation(dts, index);
    activation(dds, index);
  })
})



dts.forEach((el, index) => {

  el.addEventListener("click", (e) => {
    e.preventDefault();
   
    activation(dts, index);
    activation(dds, index);

  })

})

function activation(arr, index) {
  for (let el of arr) {
    el.classList.remove("on");
  }
  arr[index].classList.add("on");
}