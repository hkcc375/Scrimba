let home_count = 0;
let guest_count = 0;

function home_increment_one() {
  home_count += 1;
  document.getElementById("home").textContent = home_count;
}

function home_increment_two() {
  home_count += 2;
  document.getElementById("home").textContent = home_count;
}

function home_increment_three() {
  home_count += 3;
  document.getElementById("home").textContent = home_count;
}

function guest_increment_one() {
  guest_count += 1;
  document.getElementById("guest").textContent = guest_count;
}

function guest_increment_two() {
  guest_count += 2;
  document.getElementById("guest").textContent = guest_count;
}

function guest_increment_three() {
  guest_count += 3;
  document.getElementById("guest").textContent = guest_count;
}
