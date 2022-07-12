function calculateAge(){

    var born = document.getElementById('born').value
    const today = new Date()
    const date = new Date(born)
    var ageindays = Math.ceil( (today-date)/86400000 )

    let atBirth = document.getElementsByName('atBirth')
    let twoMonths = document.getElementsByName('2M')
    let threeMonths = document.getElementsByName('3M')
    let fourMonths = document.getElementsByName('4M')
    let fiveMonths = document.getElementsByName('5M')
    let sixMonths = document.getElementsByName('6M')
    let nineMonths = document.getElementsByName('9M')
    let twelveMonths = document.getElementsByName('12M')
    let fifteenMonths = document.getElementsByName('15M')
    let fourYears = document.getElementsByName('4Y')    


    function setDeadline(number,time,born){
        let deadline= new Date(born)
        let go = "Aplicar ATÉ o dia: "
            
        deadline.setDate(deadline.getDate() + number)

        let day= String(deadline.getDate()).padStart(2,'0')
        let month= String(deadline.getMonth()+1).padStart(2,'0')
        let year= deadline.getFullYear()

        time.forEach(shot=>{
            var img=document.createElement('img');
            img.src='Green.png'

            shot.innerText = go + day + "/" + month + "/" + year
            shot.appendChild(img)
        })
        
    }

    function setWait(number,time,born){
        let until= new Date(born)
        let wait = "Aplicar DEPOIS do dia: "
        
    
        until.setDate(until.getDate() + number)

        let day= String(until.getDate()).padStart(2,'0')
        let month= String(until.getMonth()+1).padStart(2,'0')
        let year= until.getFullYear()

        time.forEach(shot=>{
            shot.innerText = wait + day + "/" + month + "/" + year
            var img=document.createElement('img');
            img.src='Yellow.png'
            shot.appendChild(img)
        })
    }

    function setLost(time){
        let lost = "Dose aplicada ou perdida!"
        time.forEach(shot=>{
            shot.innerText = lost
            var img=document.createElement('img');
            img.src='Red.png'
            shot.appendChild(img)

        })

    }
    
    if(date>today){
        alert("Data muito avançada!")
    } else {

        /* atBirth */

        if(ageindays <= 30){
            setDeadline(30,atBirth,born)
             
        } else if(ageindays>30){
            setLost(atBirth)
        }

        /* twomonths */

        if(ageindays<60){
            setWait(60,twoMonths,born)
           
        }else if(ageindays>60 && ageindays<105){
            setDeadline(105,twoMonths,born)
        }else{
            setLost(twoMonths)
        }

        /* threeMonths */

        if(ageindays<90){
            setWait(90,threeMonths,born)
               
        }else if(ageindays>90 && ageindays<120){
            setDeadline(120,threeMonths,born)
        }else{
            setLost(threeMonths)
        }

        /*   fourMonths */

        if(ageindays<120){
            setWait(120,fourMonths,born)
               
        }else if(ageindays>120 && ageindays<240){
            setDeadline(240,fourMonths,born)
        }else{
            setLost(fourMonths)
        }
        
        /* fiveMonths */

        if(ageindays<150){
            setWait(150,fiveMonths,born)
                   
        }else if(ageindays>150 && ageindays<180){
            setDeadline(180,fiveMonths,born)
        }else{
            setLost(fiveMonths)
        }

        /* sixMonths */

        if(ageindays<180){
            setWait(180,sixMonths,born)
                       
        }else if(ageindays>180 && ageindays<210){
            setDeadline(210,sixMonths,born)
        }else{
            setLost(sixMonths)
        }

        /* nineMonths */

        if(ageindays<270){
            setWait(270,nineMonths,born)
                           
        }else if(ageindays>270 && ageindays<365){
            setDeadline(365,nineMonths,born)
        }else{
            setLost(nineMonths)
        }

        /* twelveMonths */

        if(ageindays<365){
            setWait(365,twelveMonths,born)
                               
        }else if(ageindays>365 && ageindays<1461){
            setDeadline(1461,twelveMonths,born)
        }else{
            setLost(twelveMonths)
        }

        /* fifteenMonths */

        if(ageindays<515){
            setWait(515,fifteenMonths,born)
           
        }else if(ageindays>515 && ageindays<1461){
            setDeadline(1461,fifteenMonths,born)
        }else{
            setLost(fifteenMonths)
        }

        /* fourYears */

        if(ageindays<1461){
            setWait(1461,fourYears,born)
           
        }else if(ageindays>1461 && ageindays<2555){
            setDeadline(2555,fourYears,born)
        }else{
            setLost(fourYears)
        }

    }
}

