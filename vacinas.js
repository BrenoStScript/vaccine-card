function calculateAge(){

    var born = document.getElementById('born').value
    const today = new Date()
    const date = new Date(born)
    var ageindays = Math.ceil( (today-date)/86400000 )
    let atBirth = document.getElementsByName('atBirth')
    let twoMonths = document.getElementsByName('pneumoD1Text')
    
    if(date>today){
        alert("Data muito avançada!")
    } else {
        if(ageindays <= 30){
             atBirth.forEach(shot=>{
                shot.style.backgroundColor = 'green'
            })
        } else if(ageindays>30){
            atBirth.forEach(shot=>{
                shot.style.backgroundColor = 'red'
            })
        }

        if(ageindays<45){
            twoMonths.forEach(shot=>{
                shot.style.color = 'yellow'
                shot.innerText = 'Aplicar depois do dia '
            })
           
        }else if(ageindays>45 && ageindays<105){
            twoMonths.forEach(shot=>{
                shot.style.backgroundColor = 'green'
                shot.innerText = 'Aplicar até dia: '
            })
        }else{
            twoMonths.forEach(shot=>{
                shot.style.backgroundColor ='red'
                shot.innerText = 'Dose perdida!'
            })
            }
        












    }
}