//let name = "nana";
//let lastname = "muiz";
//let forename = "cliff";

//document.write(name + " " + lastname + " " + forename);
// let yearborn = 2004;
//let currentyear = 2022;
//document.write(yearborn - currentyear);

// let friends = ["ab", "doa", "mophty"];

// for (let index = 0; index < friends.length; index++) {
//   console.log(friends[index]);
// }
// function age(num1, num2, num3) {
//   let sum = num1 + num2 + num3;
//   console.log(sum);
//   return sum;
// }
// age(1, 2, 2);
document.getElementById("bars").addEventListener("click", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("show-nav");
  // nav.classList.toggle("nav");
  if (nav.classList.contains("show-nav")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
