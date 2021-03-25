export default class TextUtility {
    static getTwoDigitString = (text: string) => {
        return ('0' + text).slice(-2);
    };
}
