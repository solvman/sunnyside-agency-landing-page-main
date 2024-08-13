"use client";
import { useRef, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

import useClickOutside from "@/hooks/useClickOutside";
import useEscapeKey from "@/hooks/useEscapeKey";
import VisuallyHidden from "./VisuallyHidden";

type MenuPropsType = {
  handleCloseMenu: () => void;
};

function Menu({ handleCloseMenu }: MenuPropsType) {
  const openMenuRef = useRef(null);
  useEscapeKey(handleCloseMenu);
  useClickOutside(openMenuRef, handleCloseMenu);

  return (
    <RemoveScroll>
      <div
        className="absolute px-6 right-0 w-full"
        style={{
          top: "calc(100% + 1rem)",
        }}
      >
        <motion.div
          className="w-0 h-0 ml-auto"
          style={{
            borderTop: "0px solid transparent",
            borderLeft: "0px solid transparent",
            borderRight: "0px solid white",
            borderBottom: "0px solid white",
          }}
          animate={{
            borderTop: "10px solid transparent",
            borderLeft: "10px solid transparent",
            borderRight: "10px solid white",
            borderBottom: "10px solid white",
          }}
          exit={{
            borderTop: "0px solid transparent",
            borderLeft: "0px solid transparent",
            borderRight: "0px solid white",
            borderBottom: "0px solid white",
            transition: { delay: 0.3 },
          }}
        />
        <motion.div
          ref={openMenuRef}
          className=" bg-white shadow-2xl overflow-hidden"
          style={{
            height: "0",
          }}
          animate={{
            height: "auto",
          }}
          exit={{
            height: "0",
            transition: {
              delay: 0.2,
            },
          }}
          transition={{
            type: "spring",
            delay: 0.25,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.375, type: "spring" }}
            exit={{ opacity: 0, transition: { delay: 0, duration: 0.1 } }}
          >
            <ul className="flex flex-col gap-6 py-6 items-center">
              <li>
                <a href="" className="btn-mobile">
                  About
                </a>
              </li>
              <li>
                <a href="" className="btn-mobile">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="btn-mobile">
                  Project
                </a>
              </li>
              <li>
                <a href="" className="btn-mobile">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </RemoveScroll>
  );
}

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <div className="sm:hidden ml-auto">
        <FocusLock>
          <motion.nav
            aria-label="Main menu"
            role="navigation"
            className="flex flex-row items-center"
            initial={false}
            animate={open ? "open" : "closed"}
          >
            <motion.button
              className="w-6 h-6 relative"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
            >
              {open ? (
                <VisuallyHidden>Close main menu</VisuallyHidden>
              ) : (
                <VisuallyHidden>Open main menu</VisuallyHidden>
              )}
              <motion.span
                className="absolute bg-white h-[2px] w-6 shadow-sm"
                style={{
                  top: "10%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["10%", "50%", "50%"],
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "10%"],
                  },
                }}
              />
              <motion.span
                className="absolute bg-white h-[2px] w-6 shadow-sm"
                style={{
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                  },
                }}
              />
              <motion.span
                className="absolute bg-white h-[2px] w-6 shadow-sm"
                style={{
                  bottom: "10%",
                  left: "50%",
                  x: "-50%",
                  y: "50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                    bottom: ["10%", "50%", "50%"],
                  },
                  closed: {
                    rotate: ["-45deg", "0deg", "0deg"],
                    bottom: ["50%", "50%", "10%"],
                  },
                }}
              />
            </motion.button>
            <AnimatePresence>
              {open && <Menu handleCloseMenu={() => setOpen(false)} />}
            </AnimatePresence>
          </motion.nav>
        </FocusLock>
      </div>
    </MotionConfig>
  );
}
export default HamburgerMenu;
