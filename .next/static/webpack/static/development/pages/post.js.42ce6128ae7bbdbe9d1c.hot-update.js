webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);





var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2251713545"
  }, "h1.jsx-2251713545,a.jsx-2251713545{font-family:'Arial';}p.jsx-2251713545{font-family:'Arial';}ul.jsx-2251713545{padding:0;}li.jsx-2251713545{list-style:none;margin:5px 0;}a.jsx-2251713545{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2251713545:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxzb3VyY2UgYmVsYWphciBuZ29kaW5nXFxiZWxpbW9iaWxndWUtbmV4dFxccGFnZXNcXHBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBSStCLEFBSUUsQUFJWixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVpmLEFBSUEsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6IkY6XFxzb3VyY2UgYmVsYWphciBuZ29kaW5nXFxiZWxpbW9iaWxndWUtbmV4dFxccGFnZXNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoXHJcbiAgPExheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8aDE+e3Byb3BzLnJvdXRlci5xdWVyeS50aXRsZX08L2gxPlxyXG4gICAgPHA+e3Byb3BzLnJvdXRlci5xdWVyeS5hYnN0cmFjdH08L3A+XHJcbiAgIFxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuLy8gUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICBcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/ZnE9ZnE6KFwiJHtpZH1cIikmYXBpLWtleT1XRDlvclBONmZtV1NZbUdqSGFad25ad1c3OUNhMDZ4YWApO1xyXG4vLyAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICBjb25zb2xlLmxvZyhzaG93KVxyXG4vLyAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5yZXNwb25zZX1gKTtcclxuXHJcbi8vICAgcmV0dXJuIHsgc2hvdyB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXX0= */\n/*@ sourceURL=F:\\source belajar ngoding\\belimobilgue-next\\pages\\post.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2251713545"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2251713545"
  }, props.router.query.abstract));
}; // Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=fq:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);
//   const show = await res.json();
//   console.log(show)
//   console.log(`Fetched show: ${show.response}`);
//   return { show };
// };


/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.42ce6128ae7bbdbe9d1c.hot-update.js.map