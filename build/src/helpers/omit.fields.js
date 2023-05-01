"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
function exclude(data, keys) {
    for (let key of keys) {
        if (data.length) {
            data.forEach((d) => {
                delete d[key];
            });
        }
        delete data[key];
    }
    return data;
}
exports.exclude = exclude;
//# sourceMappingURL=omit.fields.js.map