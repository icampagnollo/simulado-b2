function calculaimc()
{
    for (let i = 0; i < 10; i++)
    {
        peso = parseFloat(prompt("Qual seu peso? (em kg) "))
        altura = parseFloat(prompt("Qual sua altura? (em metros)"))

        imc = peso / (altura * altura)

        if (imc < 18.5)
        {
            alert("Abaixo do peso normal!")
        } else if (imc < 24.9)
        {
            alert("Peso normal")
        } else if  (imc < 29.9)
        {
            alert("Excesso de peso")
        } else if (imc < 34.9)
        {
            alert("Obesidade Classe I")
        } else if (imc < 39.9)
        {
            alert("Obesidade Classe II")
        } else
        {
            alert("Obesidade Classe III")
        }
    }
}
calculaimc()
