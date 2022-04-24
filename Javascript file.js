function createNode(element) {
 return document.createElement(element);
}
function getCourse(selectObject) {debugger;
   var ugCourse = [{Position1 : "CSE 3203 Mobile System Overview", Position2 : "IT 6203 IT Design Studio"},
   {Position1 : "IT 4213 Mobile Web Development", Position2 : "IT 6753 Advanced Web"}];

   var pgCourse = [{Position1 : "IT 4153 Advanced Database", Position2: "IT 6713 Business Intelligence"},
   {Position1 : "IT 4713 BI Systems", Position2: "IT 7113 Data Visualization"}];

   var position = document.getElementById("position");
   var studentStatus = document.getElementById("status");
   var courseSelect = document.getElementById("course");

if(position.value == "1" && studentStatus.value == "1")
{
   courseSelect.innerHTML = "";
   ugCourse.forEach(function(val, ind) {
      var option = createNode('option');
      option.innerHTML = val.Position1;
      option.value = ind + 1;
      courseSelect.appendChild(option);
    });
 }
else if(position.value == "2" && studentStatus.value == "1")
{
    courseSelect.innerHTML = "";
    ugCourse.forEach(function(val, ind) {debugger;
        var option = createNode('option');
        option.innerHTML = val.Position2;
        option.value = ind + 1;
        courseSelect.appendChild(option);
     });
 }
 else if(position.value == "1" && studentStatus.value == "2")
 {
     courseSelect.innerHTML = "";
     pgCourse.forEach(function(val, ind) {
        var option = createNode('option');
        option.innerHTML = val.Position1;
        option.value = ind + 1;
        courseSelect.appendChild(option);
     });
 }
 else if(position.value == "2" && studentStatus.value == "2")
 {
      courseSelect.innerHTML = "";
      pgCourse.forEach(function(val, ind) {
         var option = createNode('option');
         option.innerHTML = val.Position2;
         option.value = ind + 1;
         courseSelect.appendChild(option);
      });
  }
}
