//ClassName দিয়ে add-btn Class যত যায়গায় আছে সবগুলোকে ধরা হয়েছে। তার মধ্যে for of লুপ চালায়ে addEventListener যোগ করে বাটনে click করার জন্য function করা হয়েছে।

const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;

    // html এর মধ্য হতে কোন কিছুকে target  এর মাধ্যমে তুলে আনা

    const placeName = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    console.log();

    //html এর মধ্য হতে কোন কিছুকে target  এর মাধ্যমে তুলে এনে সেটাকে কোন একটা ট্যাগ এর মধ্যে পুশ করার নিয়ম

    const seclectedContainer = document.getElementById(
      "selected-place-container"
    );

    // create html tag
    const p = document.createElement("p");
    p.innerText = placeName;
    const p2 = document.createElement("p");
    p2.innerText = price;
    //change backgroung color
    e.target.parentNode.parentNode.style.backgroundColor = "yellow";

    // creat html tag (li) and push value/text
    const li = document.createElement("li");
    li.appendChild(p);
    li.appendChild(p2);

    // total budget code
    const budget = document.getElementById("budget").innerText;
    const convertedBudget = parseInt(budget);
    if (convertedBudget - parseInt(price) < 0) {
      alert("Sorry! Your budget is less than or equal to 900$");
      return;
    }
    document.getElementById("budget").innerText =
      convertedBudget - parseInt(price);

    seclectedContainer.appendChild(li);

    // total cost calculate
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(price);

    // grand total cost calculate
    const grandTotal = document.getElementById("grand-total").innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    const sum2 = convertedGrandTotal + parseInt(price);

    //document.getElementById("total-cost").innerText = sum;

    // for navbar increasing number
    setInnerText("cart-count", count);

    // for total coast
    setInnerText("total-cost", sum);

    // for grand total coast
    setInnerText("grand-total", sum2);
  });
}
function grandTotalCost(category) {
  //console.log(category);
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedTotalCost = parseInt(totalCost);

  if (category == "bus") {
    setInnerText("grand-total", convertedTotalCost + 100);
  } else if (category == "train") {
    setInnerText("grand-total", convertedTotalCost - 200);
  } else if (category == "flight") {
    setInnerText("grand-total", convertedTotalCost + 500);
  } else {
    setInnerText("grand-total", convertedTotalCost);
  }

  //console.log(convertedTotalCost);
}
// কোন ট্যাগ এর মধ্যে Text input করার নিয়ম।  এখানে id দিয়ে যেখানে Text input করতে হবে তাকে ধরা হয়েছে। value প্যারামিটার দিয়ে Text হিসাবে যা input হবে তাকে আনা হয়েছে। তার পরে function নেম setInnerText এটাকে ভিন্ন ভিন্ন স্থানে ব্যবহার করা হয়েছে। এবং html ফাইল থেকে id কে ধরা হয়েছে।  যেমনঃ setInnerText()

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
