

function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')
}
    // fluxo de erro
    if(!celsiusExist && !fahrenheitExist){
    throw new Error('Grau não indentificado')
}   

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'
    
    // fluxo alternativo C -> F
    if(celsiusExist){
        let updateDegree = Number(degree.toUpperCase().replace("C", ""));
        let formula = Celsius => C * 9/5 + 32
        let degreeSign = 'F'
    }

    return formula(updateDegree) + 'C'

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50C'))
    //transformDegree('50F')
} catch(error){
    console.log(error.message)
}