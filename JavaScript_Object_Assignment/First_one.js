//Creating Object for person1
var person1={fname:"priyanka",
lname:"reddivari",
age:21,
skills:["coding","cooking","listening","singing"],
address:{city:"chittoor",pincode:517125},
dateOfBirth:new Date('20-04-1997'),
proffession:"Employee",
married:true}
//Creating Object for Person2
var person2={fname:"bhanu",
lname:"reddivari",
age:45,
skills:["Mechanical","civil","chemical","CSE"],
address:{city:"Tirupathi",pincode:517125},
dateOfBirth:new Date('05-05-1969'),
proffession:"farmer",
married:false}

print=function()
{
console.log("person1 details\n",person1);
console.log("person2 details\n",person2);
}
print();

