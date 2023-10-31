export function steps(number: number): number {
    if ((number <= 0) || (!Number.isInteger(number)) ) {
        throw new Error("Only positive integers are allowed");
    }

    let result: number = number;
    let steps: number = 0;

    while (result > 1) {
        steps += 1;
        if (result % 2 === 0) {
            result = Math.floor(result / 2);
        } else {
            result = 3 * result + 1;
        }
    }

    return steps;
}
