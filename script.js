function leapYear(año){
    if(año % 4 === 0 || año % 100 && año % 400 == 0){
        console.log(año+" es bisiesto")
    }
    else{
        console.log(año+" no es bisiesto")
    }
}
leapYear(2023)