import { Admin } from "./models/Admin";
import { Member } from "./models/Member";

const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection");
const borrowedSection = document.getElementById("borrowedSection");

let currentUser = new Member('John Doe', 'member@example.com');
userSwitcher.addEventListener('change', (e) => {
  const selected = e.target.value;
  currentUser = selected === 'admin' ? new Admin('Admin', 'admin@example.com') : new Member('John Doe', 'member@example.com');
  bookSection.style.display = (selected === "admin" ? "block" : "none");
  borrowedSection.style.display = (selected === "member" ? "block" : "none");
});

// Initial Rendering
bookSection.style.display = "none";