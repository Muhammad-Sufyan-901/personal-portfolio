export function slideIn(direction, type, delay, duration) {
  return {
    hidden: {
      x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
      y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
}

export function slideOut(direction, type, delay, duration) {
  return {
    hidden: {
      x: 0,
      y: 0,
    },
    show: {
      x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeIn",
      },
    },
  };
}

export function fadeIn(direction, type, delay, duration) {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
}

export function fadeOut(direction, type, delay, duration) {
  return {
    hidden: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    show: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeIn",
      },
    },
  };
}

export function zoomIn(delay, duration) {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        delay,
        duration,
      },
    },
  };
}

export function zoomOut(delay, duration) {
  return {
    hidden: {
      scale: 1,
      opacity: 1,
    },
    show: {
      scale: 0,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        delay,
        duration,
      },
    },
  };
}

export function staggerContainer(staggerChildren, delayChildren) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export function textVariants(delay) {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
}

export function textContainer() {
  return {
    hidden: {
      opacity: 0,
    },
    show: (index = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.1,
      },
    }),
  };
}
