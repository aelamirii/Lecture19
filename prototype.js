var parent = {
  value: "parentValue",
  obj:{
    objValue: "parentObjValue"
      },
  walk: function () {
    console.log("walking");
    // return "Walking parent";
    }
};

var child = Object.create(parent);

console.log("CHILD - child.value :",child.value);
console.log("CHILD - child.obj.objValue :",child.obj.objValue);
console.log("PARENT - parent.value :",parent.value);
console.log("PARENT - parent.obj.objValue :",parent.obj.objValue);
console.log("parent :", parent);
console.log("child :", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";


// child.obj = {
//             objValue: "ChildObjValue"
//           };

// child.walk = function () {
//   console.log("walking child");
//   // return "walking child";
// };

console.log("*** CHANGED: child.value = 'childValue'");
console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value :",child.value);
console.log("CHILD - child.obj.objValue :",child.obj.objValue);
console.log("PARENT - parent.value :",parent.value);
console.log("PARENT - parent.obj.objValue :",parent.obj.objValue);
console.log("parent :", parent);
console.log("child :", child);

// console.log("Walk parent :", parent.walk());
// console.log("Walk child :", child.walk());

console.log("child.obj === parent.obj ? ", child.obj === parent.obj );

var grandChild = Object.create(child);
console.log("GrandChild :", grandChild);
grandChild.walk();
