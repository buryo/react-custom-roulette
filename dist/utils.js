import { WEB_FONTS } from './strings';
export var getRotationDegrees = function (prizeNumber, numberOfPrizes) {
    var degreesPerPrize = 360 / numberOfPrizes;
    var initialRotation = 43 + degreesPerPrize / 2;
    var perfectRotation = degreesPerPrize * (numberOfPrizes - prizeNumber) - initialRotation;
    var prizeRotation = perfectRotation;
    return numberOfPrizes - prizeNumber > numberOfPrizes / 2
        ? -360 + prizeRotation
        : prizeRotation;
};
export var clamp = function (min, max, val) {
    return Math.min(Math.max(min, +val), max);
};
export var isCustomFont = function (font) {
    return !!font && !WEB_FONTS.includes(font.toLowerCase());
};
export var getQuantity = function (prizeMap) {
    return prizeMap.slice(-1)[0].slice(-1)[0] + 1;
};
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export var makeClassKey = function (length) {
    var result = '';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
