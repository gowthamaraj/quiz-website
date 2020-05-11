const real_answer = ['a','b','a','a','b'];
const form = document.querySelector('.quiz-form');
const score = document.querySelector('.score');
const update = document.querySelector('.final');
let count = 0;
form.addEventListener("submit",e =>{
    e.preventDefault();
    count = 0;
    const user_answer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    real_answer.forEach((ans,index)=>{
        if(ans == user_answer[index]){
            count++;
        }
    });
    count = count*20;
    let meter = 0;
    scrollTo(0,0);
    const timer = setInterval(()=>
    {
    score.textContent = meter;
    if(meter == count){
        clearInterval(timer);
    }
    meter++;
    },20);
    update.classList.remove("d-none"); 
});