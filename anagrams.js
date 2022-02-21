function isAnagrams (s1,s2) {
    if ( s1.length !== s2.length) return false;
    const map1 = {}
    const map2 = {}
    for ( let char of s1 ) {
        if ( char in map1 ) {
            map1[char]++ 
        } else {
            map1[char] = 1
        }
    }

    for ( let char of s2 ) {
        if ( char in map2 ) {
            map2[char]++ 
        } else {
            map2[char] = 1
        }
    }

    for ( let key in map1 ) {
        if ( !(key in map2) || map1[key] !== map2[key] ) return false;
    }
    return true;
}

// console.log(isAnagrams('garden','danger'))
// console.log(isAnagrams('mekal','kalem'))
console.log(isAnagrams('nameless','salesmen'))

