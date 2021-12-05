/*Creating Event Handler to Show Error when there is no element in name*/ 
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.ariaValueMax.length==0){
            textError.textContent="";
        }
        try{
            (new EmployeePayrollData().name=name.ariaValueMax());
            textError.textContent="";
        }
        catch(e){
            textError.textContent=e;
        }
    });
});