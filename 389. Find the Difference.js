var findTheDifference = function(s, t) {
    let l1=s.split('')
    let l2=t.split('')
    for (let i=0;i<=l1.length;i++){
        if(l2.includes(l1[i])){
            let index=l2.indexOf(l1[i]);
            l2.splice(index,1);
        }
    }
    return l2[0];
};