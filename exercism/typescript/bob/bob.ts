export function hey(heyBob: string): string {
   const noNumbers: string = heyBob.replace(/[ \t\n\r\d,]/g, '');
   console.log(noNumbers)
    heyBob = heyBob.trim();

    if (!heyBob) {
        return 'Fine. Be that way!';
    } else if (heyBob[heyBob.length - 1] === '?') {
        if ((heyBob === heyBob.toUpperCase()) && (noNumbers !== '?'))  {
            return "Calm down, I know what I'm doing!";
        } else {
            return 'Sure.';
        }
    } else if ((heyBob === heyBob.toUpperCase()) && (noNumbers.length > 0)) {
        return 'Whoa, chill out!';
    } else {
        return 'Whatever.';
    }
}