"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthBetween = exports.length = exports.minLength = exports.maxLength = void 0;
function maxLength(args) {
    if (args.length !== 1) {
        throw new Error('Invalid number of arguments.');
    }
    const maxNum = parseInt(args[0], 10);
    return {
        name: "maxLength",
        handler: (value) => {
            return value.toString().length <= maxNum;
        },
    };
}
exports.maxLength = maxLength;
function minLength(args) {
    if (args.length !== 1) {
        throw new Error('Invalid number of arguments.');
    }
    const maxNum = parseInt(args[0], 10);
    return {
        name: "minLength",
        handler: (value) => {
            return (value.toString().length >= maxNum);
        },
    };
}
exports.minLength = minLength;
function length(args) {
    let min;
    if (args.length < 1 || args.length > 2) {
        throw new Error('Invalid number of arguments.');
    }
    const max = parseInt(args[0], 10);
    if (args[1]) {
        min = parseInt(args[1], 10);
    }
    return {
        name: 'length',
        handler: (value) => {
            const len = value.length;
            if (len <= max) {
                if (min && len < min) {
                    return false;
                }
                return true;
            }
            return false;
        },
    };
}
exports.length = length;
function lengthBetween(args) {
    if (args.length !== 2) {
        throw new Error('Invalid number of arguments.');
    }
    const min = parseInt(args[0], 10);
    const max = parseInt(args[1], 10);
    if (min >= max) {
        throw new RangeError('Seed min must be less then max.');
    }
    return {
        name: 'lengthBetween',
        handler: (value) => {
            if (typeof value === 'string' || Array.isArray(value)) {
                const len = value.length;
                if (len < min || len > max) {
                    return false;
                }
                return true;
            }
            return false;
        },
    };
}
exports.lengthBetween = lengthBetween;
//# sourceMappingURL=length.rule.js.map