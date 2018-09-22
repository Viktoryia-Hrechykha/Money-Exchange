// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let answer = {};

    if (currency <= 0) {
        return answer;
    }

    if(currency > 10000) {
        answer.error = "You are rich, my friend! We don't have so much coins for exchange";
        return answer;
    }

    let h = Math.floor(currency / 50);
    let hRest = (currency % 50);

    let q = Math.floor(hRest / 25);
    let qRest = (hRest % 25);

    let d = Math.floor(qRest / 10);
    let dRest = (qRest % 10);

    let n = Math.floor(dRest / 5);
    let nRest = (dRest % 5);

    let p = currency - 50*h - 25*q - 10*d - 5*n;

    if (h) {answer["H"] = h}
    if (q) {answer["Q"] = q}
    if (d) {answer["D"] = d}
    if (n) {answer["N"] = n} 
    if (p) {answer["P"] = p}     
    
    return answer;

}
