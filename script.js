// alert("ok")
let input=document.getElementById('input')
console.log(input.value)
let buttons=document.querySelectorAll("button")
let str=" ";
let arr=Array.from(buttons)
// console.log(brr)

// let arr=[1,3,57,8]
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '=' ){
            if(str[0]=='='|| str[0]=='*' || str[0]=='+' || str[0]=='/'){
                str="EROR"
                input.value=str;
            }

            str = eval(str);
                    // input.value=str;

            if(str%1 === 0){
                input.value=str;
            }
            else{
            input.value=str.toFixed(3);
        }
        }
        
        else if(e.target.innerHTML=='RESET'){
            str=""
            input.value=str
        }
        else if(e.target.innerHTML=='DEL'){
            str=str.substring(0,str.length-1)
            input.value=str;

        }
        else{
            str+=e.target.innerHTML;
            input.value=str
        }
    })
})