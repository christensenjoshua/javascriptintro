var david ={
    name: "David",
    age: 67,
    occupation: "Electrician"
}
var paula ={
    name: "Paula",
    age: 68,
    occupation: "Office Manager"
}
var me ={
    name: "Joshua",
    age: "28",
    siblings: [
        {name:"Kimberly",
        relation: "sister",
        age: "31"
        },
        {name:"Christopher",
        relation: "brother",
        age: "32"
        }
    ],
    occupation: "Programmer",
    father: david,
    mother: paula,
}
var element = document.getElementById("myStory")

element.innerText +="My name is "+me.name+". I am "+me.age+" years old and I am a "+me.occupation+"."
element.innerText +="My mother "+me.mother.name+" is "+me.mother.age+" years old and is an "+me.mother.occupation+"."
element.innerText +="My father "+me.father.name+" is "+me.father.age+" years old and is an "+me.father.occupation+"."
var numSiblings = me.siblings.length - 1
element.innerText +="I have "+numSiblings+" siblings."
// Lie about my number of siblings
numSiblings = 0
//
siblingIndex = 0
if(numSiblings > 0) {
    do{
        if(siblingIndex > 0){
            element.innerText +="and"
        }
        element.innerText +=me.siblings[siblingIndex].name+" is my "+me.siblings[siblingIndex].relation+" and is "+me.siblings[siblingIndex].age+" years old."
        siblingIndex++
    }while(siblingIndex <= numSiblings)
} else {
    element.innerText +="Just kidding, I don't have any siblings."
}
function checkDate(garbage, moreGarbage){
    alert("I don't do anything anymore!")
}