function song () {
    let bottles, bottles2
    for (let i = 99; i >= 0; i--) {
        
        if (i >= 11 && i <= 19) bottles = "бутылок", bottles2 = "бутылок"
        else if (i % 10 === 5) bottles = "бутылок", bottles2 = "бутылки"
        else if (i % 10 === 4 && i % 10 === 3) bottles = "бутылки", bottles2 = "бутылки"
        else if (i % 10 === 2) bottles = "бутылки", bottles2 = "бутылка"
        else if (i === 1) return console.log((`${i} бутылка пива на стене, ${i} бутылка пива! Возьми одну, пусти по кругу. Нет бутылок пива на стене!`))
        else if (i % 10 === 1) bottles = "бутылка", bottles2 = "бутылок"
        else bottles = "бутылок", bottles2 = "бутылок"
        
        console.log (`${i} ${bottles} пива на стене ${i} ${bottles} пива! Возьми одну, пусти по кругу, ${i - 1} ${bottles2} пива на стене!`)
    }
}
song()