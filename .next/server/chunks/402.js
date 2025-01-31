"use strict";
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const darkMode = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const userStatus = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const allChatRoomMessages = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const userDetails = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const userNotifications = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const listeners = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const loggingIn = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);
const userPosts = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const homePagePosts = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const stories = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const followingArray = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const storiesArray = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const usersListArray = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const spotlightUsers = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const storiesLoading = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);
const postsLoading = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);
const followingArrayStatus = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const suggestionsLoading = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);
const chatRoomLoading = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);
const userPorfileLoading = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);
const newMessage = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const atoms = {
    darkMode,
    userStatus,
    allChatRoomMessages,
    userDetails,
    userNotifications,
    listeners,
    loggingIn,
    userPosts,
    homePagePosts,
    stories,
    followingArray,
    storiesArray,
    usersListArray,
    spotlightUsers,
    storiesLoading,
    postsLoading,
    suggestionsLoading,
    chatRoomLoading,
    userPorfileLoading,
    newMessage,
    followingArrayStatus
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (atoms);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;