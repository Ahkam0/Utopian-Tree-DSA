function utopianTree(n) {
    // Write your code here

    let height = 1;

    for (let cycle = 1; cycle <= n; cycle++) {
        if ((cycle % 2) === 0) {
            height++
        } else {
            height = height * 2
        }

    }
    return height
}