function UtopianTree(n: number): number {
    // Write your code here

    let height: number = 1;

    for (let cycle: number = 1; cycle <= n; cycle++) {
        if ((cycle % 2) === 0) {
            height++
        } else {
            height = height * 2
        }

    }
    return height
}