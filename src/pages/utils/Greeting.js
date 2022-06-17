


const Greeting = (greeting) => {
    
    const date = new Date
    let time = date.getHours()

    if (time < 12){

        return greeting="Good Morning, schedule your task."
    }

    else if (time > 18){

        return greeting="Good Afternoon, schedule your task."
    }

    else{
        return greeting="Good Evening, schedule your task."
    }
}

export default Greeting