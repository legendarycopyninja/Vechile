 
let count = 0;
let result = document.getElementById("count");
let saveEl = document.getElementById("savingresult");
console.log(saveEl); 

function increment() {
 count++;
result.innerText = count;
}

function reset() {
    count =0;
    result.textContent = 0;
    saveEl.textContent = "Previous Entries : " ;
   }

   function savelog() {
   let counstr = ` ${count} - `;
   saveEl.textContent += counstr;
   result.textContent = 0;
   count = 0;
   }




