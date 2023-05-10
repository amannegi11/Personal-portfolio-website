//toast
const toastBox=document.querySelector('.toastbox')


function Showtoast(Msg){
    let toast=document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=Msg;
    toastBox.appendChild(toast);

    if(Msg.includes('fill')){
        toast.classList.add('error')
    }
    if(Msg.includes('Invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove()
    },3000)


}





// contact 
function sendmail(callback){
    const serviceID="service_dga75zr"
    const templateID='template_y53smw4'
    var params={
        name:document.getElementById('NAME').value,
        email:document.getElementById('EMAIL').value,
        subject:document.getElementById('SUBJECT').value,
        message:document.getElementById('MESSAGE').value
    };
    if(params.email==="" || params.message==="" || params.subject==="" || params.name===""){
        callback('<i class="fa-sharp fa-solid fa-xmark"></i> fill all boxes')
        return ""
    }
    else if(!params.email.includes('@')){
        callback('<i class="fa-sharp fa-solid fa-circle-exclamation"></i> Invalid mail id')
        return ""
    }
    
    else{
    emailjs.send(serviceID,templateID,params).then(
            (res)=>{
                callback('<i class="fa-solid fa-check"></i>Message Sent Successfully')
                document.getElementById('NAME').value="";
                document.getElementById('EMAIL').value="";
                document.getElementById('SUBJECT').value="";
                document.getElementById('MESSAGE').value="";
                
            }
        ).catch((err)=>console.log(err))
    }
}






