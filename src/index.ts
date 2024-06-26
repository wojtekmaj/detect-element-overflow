function getRect(element: HTMLElement) {
  return element.getBoundingClientRect();
}

export default function detectElementOverflow(element: HTMLElement, container: HTMLElement) {
  return {
    get collidedTop(): boolean {
      return getRect(element).top < getRect(container).top;
    },
    get collidedBottom(): boolean {
      return getRect(element).bottom > getRect(container).bottom;
    },
    get collidedLeft(): boolean {
      return getRect(element).left < getRect(container).left;
    },
    get collidedRight(): boolean {
      return getRect(element).right > getRect(container).right;
    },
    get overflowTop(): number {
      return getRect(container).top - getRect(element).top;
    },
    get overflowBottom(): number {
      return getRect(element).bottom - getRect(container).bottom;
    },
    get overflowLeft(): number {
      return getRect(container).left - getRect(element).left;
    },
    get overflowRight(): number {
      return getRect(element).right - getRect(container).right;
    },
  };
}
