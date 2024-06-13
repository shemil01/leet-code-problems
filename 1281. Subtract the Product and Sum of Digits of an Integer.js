var subtractProductAndSum = function(n) {
    let p = 1;
    let s = 0;
    n =  n.toString();
    for(let i =0; i< n.length; i++)
        {
            p*=Number(n.charAt(i));
            s+=Number(n.charAt(i));
        }
    return p-s;
}