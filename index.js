console.log('hello')

//LONGEST COMMON PREFIX
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const arrayOfStrings = ["g", "bloo", "kay", "flop"]

//ouput = "fl"

const findLongest = (array) => {

    let newArray = []

    array.forEach((word)=>{
        newArray.push(word.split(""))
    })
    const firstWord = newArray[0]
    let pref = []

    for (let i = 1; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {
            if (firstWord[j] === newArray[i][j]) {
                pref.push(firstWord[j])
            } else if (firstWord[j] !== newArray[i][j]) {
                pref.push(",")
            }
        }
    }
    const string = pref.join("")
    const array3 = string.split(",")
    const final = []
    array3.forEach((word)=>{
        if (word.length >= 1){
            final.push(word)
        }
    })
    let shortest = ""
    if (final.length > 0) {
        shortest = final.reduce((a, b) => {
            return a.length <= b.length ? a : b;
            })
    } else if (final.length === 0) {
        shortest = " "
    }
    
    return shortest    
}

console.log(findLongest(arrayOfStrings))

