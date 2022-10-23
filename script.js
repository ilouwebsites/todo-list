var todonumber = 1;
//object that contains all the check todo (by id) and if they are done or not
var isDone = new Object();
isDone["check-1"]=false;


//create the string of the id of new todos

var todoname = "";
var todocheck = "";
var todosuppr = "";
var todobr = "";
function create_todo(){
    
    //id variables
    todonumber = todonumber + 1;
    todoname = "todo-"+todonumber;
    todocheck = "check-"+todonumber;
    todosuppr = "suppr-todo-"+todonumber;
    todobr = "br-"+todonumber;

    //create the elements of the new todo
    var input = document.createElement("input");
    var br = document.createElement("br");
    var div = document.getElementById("todo");
    var check = document.createElement("button");
    var suppr = document.createElement("button");
    var supprtxt = document.createTextNode("del");
    check.appendChild(document.createTextNode("x"));
    suppr.appendChild(supprtxt);
    
    //set attributes
    //del button
    suppr.setAttribute("id", todosuppr);
    suppr.setAttribute("class", "suppr");
    suppr.setAttribute("onclick", "suppr_todo(this);");

    //check
    check.setAttribute("class", "check");
    check.setAttribute("onclick", "doneornot(this);");
    check.setAttribute("id", todocheck);

    //input
    input.setAttribute("class", "input");
    input.setAttribute("placeholder", "new todo...");
    input.setAttribute("id", todoname);

    //br
    br.setAttribute("id", todobr);

    //add the elements to the page
    todo.appendChild(br);
    todo.appendChild(input);
    todo.appendChild(check);
    todo.appendChild(suppr);

    //adding the todo to the object that contains all the check todo (by id) and if they are done or not
    isDone[todocheck] = false;
    
};

var obj = "";

function doneornot(checkobj){
    //check if the check button is ticked or not
    obj = checkobj.id;
    
    if(isDone[obj]){
        isDone[obj] = false;
        
        checkobj.style["color"]="white";
        

    }else if(!isDone[obj]){
        
        isDone[obj] = true;
        
        checkobj.style["color"]="green";
    };
    
    //verify if all of the todos are done
    if(Object.values(isDone).every(value => value === true)){
        alert("Congratulations ! you have finished all of yout todos ! I'm proud of you.");
    };

    
};


function suppr_todo(obj){
    //del a todo
    //search the todo number
    var id_final = obj.id;
    var nbr = id_final.replace("suppr-todo-", "");
    var todonm = "todo-"+nbr;

    //verify if the user is sure that he wants to del the todo
    var sup = document.getElementById(todonm);
    var valu = sup.value;
    var question = "";
    if(valu==""){
        question = "do you really want to delete this empty todo?";
    }else{
        question = "do you really want to delete the '"+valu+"' todo?";
    };
    if(confirm(question)){
        //del the todo
        //del the input
        sup.remove();

        //del the check button
        var todochk = "check-"+nbr;
        sup = document.getElementById(todochk);
        sup.remove();

        //del the del button
        var todosupp = "suppr-todo-"+nbr;
        sup = document.getElementById(todosupp);
        sup.remove();

        //del the br element
        var todob = "br-"+nbr;
        sup = document.getElementById(todob);
        sup.remove();

        //delete the check todo in the object
        delete isDone[todochk];

        //verify if all of the todos are done
        if(Object.values(isDone).every(value => value === true)){
            alert("Congratulations ! you have finished all of yout todos ! I'm proud of you.");
        };
    };
};

