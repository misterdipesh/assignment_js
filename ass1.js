/*2. Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN"
*/

function calcCircumfrence(radius){
let pie=3.14;
let circumference=2*pie*radius;
console.log('The circumference is '+circumference);

}
/*
3. Following is an Array of my favorite places and some two favorite place and remove
 Kathmandu from the list and also print the array with its length.
                 ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
*/
let myFavPlace=["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
myFavPlace.splice(3,1);
let arrayLen=myFavPlace.length;
myFavPlace.forEach(function(val){
console.log(val)});
console.log("arraylen"+arrayLen);

