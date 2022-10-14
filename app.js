const messageBody = document.querySelectorAll(".container3")
const msgContent = document.querySelector(".msg-content")
const notificationBadge = document.querySelector(".badge")
const read = document.querySelector(".read")
const redBadge = document.querySelectorAll('#red-badge')



notificationBadge.textContent = messageBody.length

messageBody.forEach((body)=>{
    let isClicked = false
    body.addEventListener("click", function(e){
            if(!isClicked){
                isClicked = true
                body.style.background = "white";
                let redBtn = e.target.querySelector("#red-badge")
                console.log(redBtn)
                redBtn.classList.add("disappear")
                notificationBadge.textContent--
                
                
            }else{
                if(body.children.length > 1 && isClicked ){
                    msgContent.classList.toggle("open")
                    
                    msgContent.style.background = "white"
                }
            }
            
            if(notificationBadge.textContent == 0){
                notificationBadge.classList.add("close")
            }
            
   })
 
   
})

read.addEventListener("click", ()=>{
    messageBody.forEach((body) =>{
         body.style.background = "white";
         notificationBadge.classList.add("close")
         redBadge.forEach((redCircle)=>{
                redCircle.classList.add('disappear')
         })

    })
})

