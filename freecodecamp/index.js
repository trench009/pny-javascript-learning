
// Counting Cards

let count = 0;

function cc(card){
   switch(card){
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
      count++;
      break;
     case 7:
     case 'j':
     case 'K':
     case 'L' :
     case 'm' :
       count -- ;
       break;

   }
   // thats how we can use if else statement in switch statement......!!!!

   if(count > 0){
     return count + "BET";
   }else{
    return count  + "Hold";
   }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
// today we're gonna know about the switch statement

function casenoone(val){
    let result = ""
    switch(val){
       case 1:
        result="yes it works";
        break;
        case 2:
            result="no it's not working";
            break;
        case 3:
            result="yup it absolutely working";
            break;
            
            
    }
    return result;
}
casenoone(2);

// switch statement with default 


 function defaultcase(val){

    let answer="";
    switch(val){
    
    case "a":
        answer="apple";
        break;
        
        case "b":
            answer="ball";
            break;

            case "c":
                answer="cats";
                break;
        
              default:
                answer="when no one statemnet is true so it will works in switch statement";   
    }

    return answer;
 }

 defaultcase(a);


//  multiple Identical Option in switch statements

    function downone(val){
        let answer="";

        switch(val){
         case 1:
         case 2:
        case 3:
            answer="this is low one";
            break; 
            
          case 4:
            case 5:
                case 6:
                    answer="this is medium one";
                    break;
                    
           case 7:
            case 8:
                case 9:
                    answer="this oneis the hight one";
                    break;
        }
        return answer;
    }
downone();


// if /else if ki jagah hum ab use krein gy switch statement

function downone(val){
    let answer="";

    switch(val){
    case "bob":(val === "bob")
    {
        answer="yes it's bob";
        break;
    }

    case "pink":(val ==="pink")
    {
        answer="yes it's me pink";
        break;
    }
    case "chris":(val === "chris")
    {
        answer="yes chris is naughty boii";
        break;
    }

    case 77:(val ==="77")
    {
        answer="yes it's a right one";
        break;
    }

    case "salmoon":(val === " salmoon")
    {
        answer="yes he is stupid ass shit...!";
        break;
    }
    }
    return answer;
}


downone();




// we use while loop so that it wil ltest at first while statement should execute first..


const k=5;

let second=[];


while(k >=0){
    myArray.push(i);
    k--;
}



// for loop in javascript is used to print the things in loop for example like this

var ourArray = [];
for(var i=0; i<5;i++){
    ourArray.push(i);
}

var myArray=[];
for(var i=0; i<6;i++){
    myArray.push(i);

    console.log(myArray);
}

// even numbers using for loop
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}


var myArray = [];



for (var o = 1; i < 10; i += 2) {
  myArray.push(o);
}

// Count Backwards With a For Loop
var ourArray = [];

for (var w = 10; i > 0; i -= 2) {
  ourArray.push(w);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var w = 9; i > 0; i -= 2) {
  myArray.push(w);
}

