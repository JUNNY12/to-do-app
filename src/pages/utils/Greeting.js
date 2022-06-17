


const Greeting = (greeting) => {
    
    const date = new Date
    let time = date.getHours()

    if (time === 0 || time <= 11){

        return greeting="Good Morning, schedule your task."
    }

    else if (time >=12 || time >=15){

        return greeting="Good Afternoon, schedule your task."
    }

    else{
        return greeting="Good Evening, schedule your task."
    }
}

export default Greeting