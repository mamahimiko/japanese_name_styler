export const convertToHiragana = (value: string | null | undefined) => {
    if (!value) {
        return '';
    }

    return value.replace(/[\u30a1-\u30f6]/g, (substring: string): string => {
        const hiraganaCharCode: number = substring.charCodeAt(0) - 0x60;
        return String.fromCharCode(hiraganaCharCode);
    });
}