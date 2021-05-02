var familymembers = ["Simmy", "Ashish" , "Gustaf" , "Abhishek"];
console.log(familymembers);
document.getElementById("familymembers123").innerHTML = familymembers

var first_family_member = familymembers[0]
console.log(first_family_member)

var second_family_member = familymembers[1]
console.log(second_family_member)

var third_family_member = familymembers[2]
console.log(third_family_member)

var fourth_family_member = familymembers[3]
console.log(fourth_family_member)

var length_of_the_array = familymembers.length;
console.log(length_of_the_array)

var array_value = ""
for (i = 0; i < familymembers.length; i++) {
    console.log(familymembers[i]);
    array_value = array_value + familymembers[i] + "<br>";
}
document.getElementById("loop_the_array").innerHTML = array_value