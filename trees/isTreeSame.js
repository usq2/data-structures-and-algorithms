"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//recursive dfs
var isTreeSame = function (pRoot1, pRoot2) {
    if (!pRoot1 && !pRoot2) {
        return true;
    }
    if ((!pRoot1 && pRoot2) || (pRoot2 && !pRoot1)) {
        return false;
    }
    if ((pRoot1 === null || pRoot1 === void 0 ? void 0 : pRoot1.val) !== (pRoot2 === null || pRoot2 === void 0 ? void 0 : pRoot2.val)) {
        return false;
    }
    return isTreeSame(pRoot1 === null || pRoot1 === void 0 ? void 0 : pRoot1.left, pRoot2 === null || pRoot2 === void 0 ? void 0 : pRoot2.left) && isTreeSame(pRoot1 === null || pRoot1 === void 0 ? void 0 : pRoot1.right, pRoot2 === null || pRoot2 === void 0 ? void 0 : pRoot2.right);
};
