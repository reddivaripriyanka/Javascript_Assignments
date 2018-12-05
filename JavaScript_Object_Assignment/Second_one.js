//Creating Object for Amitabh
var Amitabh={fname:"priyanka",
lname:"reddivari",
age:21,
skills:["coding","cooking","listening","singing"],
address:{city:"Chittoor",pincode:517135},
dateOfBirth:new Date('20-04-1997'),
proffession:"Employee",
married:true}
//Creating Object for Abhishek
var Abhishek={fname:"bhanu",
age:45,
skills:["Mechanical","civil","chemical","CSE"],
dateOfBirth:new Date('05-05-1969'),
proffession:"HouseWife",
married:true}
console.log(Abhishek);
print=function()
{
var Abhishek=Object.create(Amitabh); //By creating object we are accessing properties from parent one
console.log(Amitabh.fname);
console.log(Abhishek.lname);
console.log(Abhishek.address);
}
print();

