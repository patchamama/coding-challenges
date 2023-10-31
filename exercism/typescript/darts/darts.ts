export const score = (x: number, y: number): number => {
    let result = 0;
    const rad = (x === 0) ? Math.abs(y) : (y === 0) ? Math.abs(x) : Math.sqrt(x ** 2 + y ** 2);
    
    if (rad > 5 && rad <= 10) {
        result = 1;
    } else if (rad > 1 && rad <= 5) {
        result = 5;
    } else if (rad >= 0 && rad <= 1) {
        result = 10;
    }
    
    return result;
};