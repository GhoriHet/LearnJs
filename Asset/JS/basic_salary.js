function handlebonus(){
    let salary=parseInt(document.getElementById("salary").value);
    console.log(salary);
   
    let gender=document.getElementById("gender").value;
    console.log(gender);
   
    let exp= document.getElementById("experience").value;
    console.log(exp);
   
    let experience=parseFloat(document.getElementById("number").value);
    console.log(experience);
   
   let bonus;
   
   //  if((gender==='male' || gender==='female') && exp==='monthly' && experience <=12){
   //     bonus='You are not eligible for Bonus';
   //  }else if(gender==='male' && exp=== 'yearly' && (experience >1 && experience<=3)){
   //     bonus=salary *0.10 + salary *0.05;
   //  }else if(gender==='male' && exp=== 'yearly' && (experience >3)){
   //     bonus=salary*0.20 + salary *0.05;
   //  }else if(gender==='female' && exp=== 'yearly' && (experience >1 && experience<=3)){
   //     bonus=salary *0.10 + salary * 0.07;
   //  }else if(gender==='male' && exp=== 'yearly' && (experience >1 && experience<=3)){
   //     bonus=salary * 0.20 + salary * 0.07;
   //  }else if((gender==='male' || gender==='female') && exp=== 'yearly' && (experience <=1)){
   //    bonus='You are not eligible for Bonus';
   //  }else if(gender==='male' && exp==='monthly' && (experience >12 && experience <=36)){
   //    bonus=salary * 0.10 + salary*0.05;
   //  }else if(gender==='female' && exp==='monthly' && (experience >12 && experience <=36)){
   //    bonus=salary * 0.10 + salary *0.07;
   //  }else if(gender=='male' && exp==='monthly' && (experience >36)){
   //    bonus=salary *0.20 + salary *0.05;
   //  }else if(gender==='female' && exp==='monthly' && (experience >36)){
   //    bonus=salary *0.20 +salary*0.07;
   //  }else if(gender==='female' && exp==='yearly' &&(experience >3)){
   //    bonus=salary *0.20 +salary*0.07;
   //  }
   
   
   switch(gender){
      case 'male' :
         if(exp==='yearly'){
            if(experience >1 && experience <=3){
               bonus=salary *0.10 + salary *0.05;
               // break;
            }else if(experience >3){
               bonus=salary*0.20 + salary *0.05;
               // break;
            }else if(experience<=1){
               bonus=salary*0.05;
               // break;
            }
            break;
   
         }else if(exp==='monthly'){
            if(experience >12 && experience <=36){
               bonus=salary * 0.10 + salary*0.05;
               // break;
            }else if(experience >36){
               bonus=salary *0.20 + salary *0.05;
               // break;
            }else if(experience<=12){
               bonus=salary*0.05;
               // break;  
            }
            break;
         }
   
      case 'female' :
         if(exp==='yearly'){
            if(experience >1 && experience <=3){
               bonus=salary *0.10 + salary *0.07;
               // break;
            }else if(experience >3){
               bonus=salary*0.20 + salary *0.07;
               // break;
            }else if(experience<=1){
               bonus=salary*0.07;
               // break;
            }
            break;
   
         }else if(exp==='monthly'){
            if(experience >12 && experience <=36){
               bonus=salary * 0.10 + salary*0.07;
               // break;
            }else if(experience >36){
               bonus=salary *0.20 + salary *0.07;
               // break;
            }else if(experience<=12){
               bonus=salary*0.07;
               // break;  
            }
            break;
         }
      
   }
   
    let total;
   
    total=salary + bonus;
   
    document.getElementById("ans").innerHTML=bonus;
    document.getElementById("sala").innerHTML=salary;
    document.getElementById("total").innerHTML=total;
   
   
    return false;
    
       
   }