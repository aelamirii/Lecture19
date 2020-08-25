// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("Walkinggg :)");
//   }
// };
//
// var child = Object.create(parent);
//
// // console.log("CHILD - child.value: ", child.value);
// // console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// // console.log("PARENT - parent.value: ", parent.value);
// // console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// // console.log("PARENT: ", parent);
// // console.log("child: ", child);
//
// child.value = "ChildValue";
// child.obj.objValue = "ChildObjValue";
//
// // child.obj = {
// //   objValue: "ChildObjValue"
// // };
//
//
// console.log("*** CHANGED: child.value = 'childValue' ");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue' ");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("PARENT: ", parent);
// console.log("child: ", child);
//
// console.log("Child.obj === parent.obj ?", child.obj === parent.obj);
//
//
// var grandChild = Object.create(child);
// console.log("GrandChild :", grandChild);
// grandChild.walk();



function Dog(name) {
  this.name = name;
  console.log("'this' is :", this);
};


var myDog = new Dog("Max");
console.log("MyDog is :",myDog);

Dog("Max2");
