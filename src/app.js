const divHour = document.getElementById('hours')
const divMinutes = document.getElementById('minutes')
const divSeconds = document.getElementById('seconds')



const getTime = (date) =>{
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return {hour,minutes,seconds}
}

const setTime = ({ hour, minutes, seconds }) => {
    divHour.textContent = String(hour).padStart(2, '0');
    divMinutes.textContent = String(minutes).padStart(2, '0');
    divSeconds.textContent = String(seconds).padStart(2, '0');
};

const updateClock = ()=>{
    const dateNow = new Date()
    const date = getTime(dateNow)
    setTime(date)
}

updateClock()
setInterval(updateClock,1000)

    
    


  
