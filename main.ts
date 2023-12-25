import inquirer from "inquirer";
let num=Math.floor(Math.random()*10)+1
for(let i=0;i<4;i++){
    let game=await inquirer.prompt({
    type:"input",
    name:"userguess",
    message:"guess your number"
})
if(game.userguess===num){
    console.log("true guess");
}
else{
    console.log("wrong guess");
}
}
