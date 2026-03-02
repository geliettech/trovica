
// ===============================
// PAGE TRANSITIONS
// ===============================

export const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};
// ===============================
// FADE IN
// ===============================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ===============================
// SCALE IN
// ===============================

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ===============================
// BOUNCE IN
// ===============================

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  },
};

// ===============================
// SLIDE UP
// ===============================

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// ===============================
// SLIDE DOWN
// ===============================

export const slideDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

// ===============================
// SLIDE LEFT
// ===============================

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

// ===============================
// SLIDE RIGHT
// ===============================

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

// ===============================
// ROTATE IN
// ===============================

export const rotateIn = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ===============================
// ZOOM IN
// ===============================

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ===============================
// STAGGER CONTAINER
// ===============================

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ===============================
// NAV ITEM
// ===============================

export const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// ===============================
// DROPDOWN
// ===============================

export const dropdown = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

// ===============================
// MOBILE MENU
// ===============================

export const mobileMenu = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

// ===============================
// HOVER EFFECTS
// ===============================

export const iconHover = {
  whileHover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};