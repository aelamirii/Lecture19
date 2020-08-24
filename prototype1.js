// var parent = {
//   value: "parentValue",
//   obj : {
//       objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("Waliking !");
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
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
//
// // child.obj = {
// //   objValue: "childObjValue"
// // };
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
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("GrandChild: ",grandChild);
// grandChild.walk();


// ** Function constructors
// see my other course : HTML, CSS and JavaScript for Web Developers
// Lecture 48
function Dog(name) {
  this.name = name;
  console.log("'this' is :", this);
}

var  myDog = new Dog("Max");
console.log("myDog :", myDog);

// NOT being used as a function cosntructor
Dog("Max2");
