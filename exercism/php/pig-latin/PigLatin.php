<?php

/*
 * By adding type hints and enabling strict type checking, code can become
 * easier to read, self-documenting and reduce the number of potential bugs.
 * By default, type declarations are non-strict, which means they will attempt
 * to change the original type to match the type specified by the
 * type-declaration.
 *
 * In other words, if you pass a string to a function requiring a float,
 * it will attempt to convert the string value to a float.
 *
 * To enable strict mode, a single declare directive must be placed at the top
 * of the file.
 * This means that the strictness of typing is configured on a per-file basis.
 * This directive not only affects the type declarations of parameters, but also
 * a function's return type.
 *
 * For more info review the Concept on strict type checking in the PHP track
 * <link>.
 *
 * To disable strict typing, comment out the directive below.
 */

declare(strict_types=1);

function soundex1($text) {
    $result = $text;
    if (strpos('aeiou', $text[0]) !== false || (in_array($text[0], ['x', 'y']) && !strpos('aeiouy', $text[1]))) {
        $result .= 'ay';
    } elseif (substr($text, 1, 2) === 'qu') {
        $tmp1 = substr($text, 3);
        $tmp2 = substr($text, 0, 3);
        $result = $tmp1 . $tmp2 . 'ay';
    } elseif ($text[1] === 'y' && strlen(trim($text)) === 2) {
        $result = 'y' . $text[0] . 'ay';
    } elseif (substr($text, 0, 3) === 'thr' || substr($text, 0, 3) === 'sch') {
        $result = substr($text, 3) . substr($text, 0, 3) . 'ay';
    } else {
        if (in_array(substr($text, 0, 2), ['ch', 'st', 'qu', 'th', 'rh'])) {
            $result = substr($text, 2) . substr($text, 0, 2) . 'ay';
        } else {
            $result = substr($text, 1) . $text[0] . 'ay';
        }
    }
    return $result;
}

function translate(string $text): string
{
    $words = explode(' ', $text);
    $result = '';
    if (count($words) === 1) {
        $result = soundex1($words[0]);
    } else {
        $tmpResult = '';
        foreach ($words as $word) {
            $tmpResult = soundex1($word);
            $result .= ' ' . $tmpResult;
        }
    }
    return trim($result);
}
    


