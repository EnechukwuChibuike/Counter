// Staff information

let allStaff = [
   { name: "De Saint", id: 1234, counter: 0 },
   { name: "Cindy", id: 5678, counter: 0 },
   { name: "Caleb", id: 9012, counter: 0 },
   { name: "Bose", id: 3456, counter: 0 },
   { name: "Josh", id: 7890, counter: 0 },
];

console.log(allStaff);

function staffReg() {
   let staffId = document.getElementById("newid").value;
   let staffName = document.getElementById("name").value;

   // looping through object

   for (let ids = 0; ids < allStaff.length; ids++) {
      if (allStaff[ids].id == staffId && allStaff[ids].name == staffName) {
         let newStaff = {
            id: allStaff[ids].id,
            name: allStaff[ids].name,
            counter: +allStaff[ids].counter + 1,
         };
         allStaff[ids] = newStaff;
      } else {
         console.log("enter valid id");
      }
   }
   return;
}

function clickMe() {
   let x = document.getElementById("GetPaid");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}

function payStaff() {
   let checkId = document.getElementById("payid").value;

   if (checkId == "") {
      console.log("enter valid id please");
   }
   // allStaff.forEach((ids) => {
   for (const ids of allStaff) {
      if (checkId == ids.id && ids.counter >= 5) {
         alert("You can withdraw");
         let para = document.createElement("p");
         para.innerHTML = `name: ${ids.name}`;
         document.getElementById("info").appendChild(para);
         let para2 = document.createElement("p");
         para2.innerHTML = `id: ${ids.id}`;
         document.getElementById("info").appendChild(para2);
         let para3 = document.createElement("p");
         para3.innerHTML = `counter: ${ids.counter}`;
         document.getElementById("info").appendChild(para3);
      } else {
         alert("You cannot withdraw");
      }
   }

   // for (let ids = 0; ids < allStaff.length; ids++) {
   //    if (allStaff[ids].id == checkId && allStaff[ids].counter >= 5) {
   //       alert("You can withdraw");
   //       let para = document.createElement("p");
   //       para.innerHTML = `name: ${allStaff[ids].name}`;
   //       document.getElementById("info").appendChild(para);
   //       let para2 = document.createElement("p");
   //       para2.innerHTML = `id: ${allStaff[ids].id}`;
   //       document.getElementById("info").appendChild(para2);
   //       let para3 = document.createElement("p");
   //       para3.innerHTML = `counter ${allStaff[ids].counter}`;
   //       document.getElementById("info").appendChild(para3);
   //    } else {
   //       alert("You cannot withdraw");
   //    }
   //    return;
   // }
}

// function changeText() {
//    let change = document.getElementById("change");
//    change.innerHTML = "I AM A NEW TEXT";
//    change.style.color = "red";
// }
