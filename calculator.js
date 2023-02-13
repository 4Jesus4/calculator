let answer= document.getElementById("answer");
let writeAnswer=(text)=>{
    answer.innerHTML=("The answer is: "+text);
}
let result=()=>{
    let firstNum=+document.getElementsByTagName("input")[0].value;
    let secondNum=+document.getElementsByTagName("input")[1].value;
    let operationSelect= document.getElementById("operator").value;
    if(operationSelect==0){
        return writeAnswer(firstNum+secondNum);
    }else if(operationSelect==1){
        return writeAnswer(firstNum-secondNum);
    }else if(operationSelect==2){
        return writeAnswer(firstNum*secondNum);
    }else if(operationSelect==3){
        return writeAnswer(firstNum/secondNum);
    }else{
        return writeAnswer("Something is wrong");
    }
};