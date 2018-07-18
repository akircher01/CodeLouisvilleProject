/*The brackets turn this into object 
var ship1 = { name: "carrier", unit: 5, col: 2, row: 6, position: "vertical"}
var ship2 = { name: "battleship", unit: 4, col: 9, row: 2, position: "vertical"}
var ship3 = { name: "cruiser", unit: 3, col: 6, row: 7, position:"horizontal" }
var ship4 = { name: "submarine", unit: 3, col: 3, row: 4, position: "vertical"}
var ship5 = { name: "destroyer", unit: 2, col: 1, row: 2, position: "horizontal"}
*/

/* This variable will count the times that the graph is clicked*/ 
var graph_clicks = 0;

 /* The function named getCellRow computes the parameter td
The first  part adds one to the graph_clicks variable
Then I use jquery to get the class and replace the html 

 The second part of the this function can be understood as follows "condition ? expr1 : expr2"
 If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.
 so if the element is a td it will return the target property (as can be seen by the target property ".target")
 window.event() is for cross browser compatibility  and is the same as td (which is an event)
 event.srcElement is the same as td.target which is that same as 
 so basically use td if it is not interent explorer but if it is internet explorer use event.srcElement. 

 So in the third part we have a varable we create a new array. and the comma creates another 
 varable where pa equals the td.parentNode, which is the location in the tr. so the top node would be 0.
 
 the fourth part has a tagname which is always capitalized. it says that if pa.tagname is tr 
 (which it is because that is the td parent) and row does not equal zero and the column does not equal 0
  than run the function 
  
  The last name is the function that it wants to run*/
function getCellRow(td){
    graph_clicks += 1;
    $('.attempts_box').html('Number of Attempts ' + graph_clicks);
    td= td? td.target:window.event? event.srcElement:'';
    var rc= [], pa= td.parentNode;
    if(pa.tagName== 'TR' && pa.rowIndex !== 0 && td.cellIndex !== 0){
       /// alert([pa.rowIndex, td.cellIndex]);
        battle(pa.rowIndex,td.cellIndex);
    }
}

function cellClicked() {
    $('td').toggle( function() {
      $(this).css('background', 'red');
    },function(){
    $(this).css('background', 'tan');
    });
  }


/* The first line says that when the window is finished loading run this function
the second line documents the results of the function above by the table.
*/
window.onload= function(){
    document.getElementsByTagName('table')[0].onclick=getCellRow;
    
    }
    
function battle(row,col)
{
    if(row==4&&col==3)
    {
        alert('Hit!! Ship 1');
    }
    else if(row==5&&col==3)
    {
        alert('Hit!! Ship 1');
    }
    else if(row==6&&col==3)
    {
        alert('Hit!! Ship 1');
    }
    else if(row==7&&col==3)
    {
        alert('Hit!! Ship 1');
    }
    else if(row==8&&col==3)
    {
        alert('Hit!! Ship 1');
    }
    else if(row==3&&col==7)
    {
        alert('Hit!! Ship 2');
    }
    else if(row==3&&col==6)
    {
        alert('Hit!! Ship 2');
    }
    else if(row==3&&col==5)
    {
        alert('Hit!! Ship 2');
    }
    else if(row==3&&col==4)
    {
        alert('Hit!! Ship 2');
    }
    else if(row==5&&col==9)
    {
        alert('Hit!! Ship 3');
    }
    else if(row==6&&col==9)
    {
        alert('Hit!! Ship 3');
    }
    else if(row==8&&col==9)
    {
        alert('Hit!! Ship 3');
    }
    else if(row==6&&col==6)
    {
        alert('Hit!! Ship 4');
    }
    else if(row==7&&col==6)
    {
        alert('Hit!! Ship 4');
    }
    else if(row==8&&col==6)
    {
        alert('Hit!! Ship 4');
    }
    else if(row==9&&col==1)
    {
        alert('Hit!! Ship 5');
    }
    else if(row==10&&col==1)
    {
        alert('Hit!! Ship 5');
    }
    else{
        alert('Miss!!');
    }
}