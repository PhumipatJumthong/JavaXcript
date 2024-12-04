function test(t){
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}
console.log(getVowels("seeing"));
    