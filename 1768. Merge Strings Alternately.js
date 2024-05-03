var mergeAlternately = function(word1, word2) {
    let result=[]
    const maxLength=Math.max(word1.length,word2.length)
    for(let i=0;i<maxLength;i++){
         result.push(word1[i])
          result.push(word2[i])

      
    }return result.join('')
};