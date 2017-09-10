"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectElementOverflow = function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return element.getBoundingClientRect().top < container.getBoundingClientRect().top;
    },
    get collidedBottom() {
      return element.getBoundingClientRect().bottom > container.getBoundingClientRect().bottom;
    },
    get collidedLeft() {
      return element.getBoundingClientRect().left < container.getBoundingClientRect().left;
    },
    get collidedRight() {
      return element.getBoundingClientRect().right > container.getBoundingClientRect().right;
    },
    get overflowTop() {
      return container.getBoundingClientRect().top - element.getBoundingClientRect().top;
    },
    get overflowBottom() {
      return element.getBoundingClientRect().bottom - container.getBoundingClientRect().bottom;
    },
    get overflowLeft() {
      return container.getBoundingClientRect().left - element.getBoundingClientRect().left;
    },
    get overflowRight() {
      return element.getBoundingClientRect().right - container.getBoundingClientRect().right;
    }
  };
};

exports.default = detectElementOverflow;