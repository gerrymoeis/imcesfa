import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Timeline", path: "/timeline" },
  { name: "Sponsor", path: "/sponsor" },
  { name: "FAQ", path: "/faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 isolate">
      <div className="h-18 mt-2 mx-2 md:-mt-px md:-mx-px flex">
        {/* Left decorative frame */}
        <div
          className={twMerge([
            "size-full relative -mr-[11px] hidden md:block",
            "[--color-frame-1-stroke:var(--color-primary)]/90",
            "[--color-frame-1-fill:var(--color-primary)]/8",
            "[--color-frame-2-stroke:var(--color-primary)]/23",
            "[--color-frame-2-fill:transparent]",
          ])}
        >
          <Frame
            className="drop-shadow-2xl drop-shadow-primary"
            paths={[
              {
                show: true,
                style: {
                  strokeWidth: "1",
                  stroke: "var(--color-frame-1-stroke)",
                  fill: "var(--color-frame-1-fill)",
                },
                path: [
                  ["M", "0", "0"],
                  ["L", "100% - 6", "0"],
                  ["L", "100% - 11", "100% - 64"],
                  ["L", "100% + 0", "0% + 29"],
                  ["L", "0", "11"],
                  ["L", "0", "0"],
                ],
              },
              {
                show: true,
                style: {
                  strokeWidth: "1",
                  stroke: "var(--color-frame-2-stroke)",
                  fill: "var(--color-frame-2-fill)",
                },
                path: [
                  ["M", "0", "14"],
                  ["L", "100% - 7", "33"],
                ],
              },
            ]}
          />
        </div>

        {/* Main content frame */}
        <div className="flex md:container h-full relative flex-none w-full">
          <div
            className={twMerge([
              "flex-none h-full px-14 relative w-full md:w-auto",
              "[--color-frame-1-stroke:var(--color-primary)]",
              "[--color-frame-1-fill:var(--color-primary)]/20",
              "[--color-frame-2-stroke:var(--color-primary)]/57",
              "[--color-frame-2-fill:transparent]",
              "[--color-frame-3-stroke:var(--color-primary)]/23",
              "[--color-frame-3-fill:transparent]",
            ])}
          >
            <Frame
              enableBackdropBlur
              className="drop-shadow-2xl drop-shadow-primary/40"
              paths={[
                {
                  show: true,
                  style: {
                    strokeWidth: "1",
                    stroke: "var(--color-frame-1-stroke)",
                    fill: "var(--color-frame-1-fill)",
                  },
                  path: [
                    ["M", "6", "0"],
                    ["L", "100% - 6.5", "0"],
                    ["L", "100% + 0", "0% + 9"],
                    ["L", "100% - 28", "100% - 15"],
                    ["L", "162", "100% - 15"],
                    ["L", "164", "100% - 30"],
                    ["L", "153", "100% - 15"],
                    ["L", "27", "100% - 15"],
                    ["L", "0", "0% + 8"],
                    ["L", "6", "0"],
                  ],
                },
                {
                  show: true,
                  style: {
                    strokeWidth: "1",
                    stroke: "var(--color-frame-2-stroke)",
                    fill: "var(--color-frame-2-fill)",
                  },
                  path: [
                    ["M", "32", "100% - 15"],
                    ["L", "0% + 152.5", "100% - 15"],
                    ["L", "0% + 163.5", "100% - 29"],
                    ["L", "0% + 161.5", "100% - 15"],
                    ["L", "100% - 32.5", "100% - 15"],
                    ["L", "100% - 36.5", "100% - 7"],
                    ["L", "0% + 163.5", "100% - 7"],
                    ["L", "0% + 165.5", "100% - 23"],
                    ["L", "0% + 152.5", "100% - 7"],
                    ["L", "37", "100% - 7"],
                    ["L", "32", "100% - 15"],
                  ],
                },
                {
                  show: true,
                  style: {
                    strokeWidth: "1",
                    stroke: "var(--color-frame-3-stroke)",
                    fill: "var(--color-frame-3-fill)",
                  },
                  path: [
                    ["M", "0", "0% + 33"],
                    ["M", "4", "0% + 33"],
                    ["L", "0% + 18.5", "100% - 12"],
                    ["L", "0% + 23.5", "100% - 12"],
                    ["L", "29", "100% + 0"],
                    ["L", "155", "100% - 0"],
                    ["L", "160", "100% - 8"],
                    ["L", "161", "100% - 0"],
                    ["L", "100% - 28", "100% + 0"],
                    ["L", "100% - 23", "100% - 11"],
                    ["L", "100% - 17", "100% - 11"],
                    ["L", "100% - 14", "100% - 14"],
                    ["L", "100% + 0", "100% - 14"],
                  ],
                  name: "Frame 3",
                },
              ]}
            />
            <div className="flex items-center justify-between mt-2.5 relative">
              <NavLink
                to="/"
                className="text-2xl font-bold text-shadow-lg text-shadow-primary mr-12"
              >
                IMCESFA
              </NavLink>
              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-8 font-medium [&>a]:hover:text-shadow-lg [&>a]:hover:text-shadow-primary/40">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-lg hover:text-shadow-lg hover:text-shadow-primary/50 ${
                        isActive
                          ? "text-primary text-shadow-md text-shadow-primary"
                          : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Right section - optional, can be removed if not needed */}
          <div
            className={twMerge([
              "w-full relative -ml-[25px] md:flex items-center justify-end pe-8 hidden",
              "[--color-frame-1-stroke:var(--color-primary)]",
              "[--color-frame-1-fill:var(--color-primary)]/10",
              "[--color-frame-2-stroke:var(--color-primary)]/23",
              "[--color-frame-2-fill:transparent]",
            ])}
          >
            <Frame
              enableBackdropBlur
              className="drop-shadow-2xl drop-shadow-primary/40"
              paths={[
                {
                  show: true,
                  style: {
                    strokeWidth: "1",
                    stroke: "var(--color-frame-1-stroke)",
                    fill: "var(--color-frame-1-fill)",
                  },
                  path: [
                    ["M", "19", "0"],
                    ["L", "100% - 5", "0"],
                    ["L", "100% + 0", "0% + 7"],
                    ["L", "100% - 36", "100% - 20"],
                    ["L", "0", "100% - 20"],
                    ["L", "25", "8.999992370605469"],
                    ["L", "19", "1"],
                  ],
                },
                {
                  show: true,
                  style: {
                    strokeWidth: "1",
                    stroke: "var(--color-frame-2-stroke)",
                    fill: "var(--color-frame-2-fill)",
                  },
                  path: [
                    ["M", "25", "100% - 14"],
                    ["L", "100% - 32", "100% - 13"],
                    ["L", "100% - 15", "36"],
                  ],
                  name: "Frame 2",
                },
              ]}
            />
            <div className="hidden md:flex items-center gap-4 relative z-10">
              <Button as="a" href="#" variant="default" shape="default" className="text-sm px-3 py-1.5">
                Daftar Sekarang
              </Button>
              <Button as="a" href="#" variant="secondary" shape="default" className="text-sm px-3 py-1.5">
                Lihat GuideBook
              </Button>
            </div>
          </div>
        </div>

        {/* Right decorative frame */}
        <div
          className={twMerge([
            "size-full relative -ml-[18px] hidden md:block",
            "[--color-frame-1-stroke:var(--color-primary)]/90",
            "[--color-frame-1-fill:var(--color-primary)]/8",
            "[--color-frame-2-stroke:var(--color-primary)]/23",
            "[--color-frame-2-fill:transparent]",
          ])}
        >
          <Frame
            paths={[
              {
                show: true,
                style: {
                  strokeWidth: "1",
                  stroke: "var(--color-frame-1-stroke)",
                  fill: "var(--color-frame-1-fill)",
                },
                path: [
                  ["M", "12", "0"],
                  ["L", "100% + 0", "0"],
                  ["L", "100% + 0", "0% + 16"],
                  ["L", "0", "100% - 42"],
                  ["L", "18", "7"],
                  ["L", "12", "0"],
                ],
              },
              {
                show: true,
                style: {
                  strokeWidth: "1",
                  stroke: "var(--color-frame-2-stroke)",
                  fill: "var(--color-frame-2-fill)",
                },
                path: [
                  ["M", "3", "100% - 36"],
                  ["L", "100% + 0", "20"],
                ],
                name: "Frame 2",
              },
            ]}
          />
        </div>
      </div>

            {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-18 bg-background/95 backdrop-blur-sm z-[-1]"
          >
            <motion.nav
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-bold hover:text-shadow-lg hover:text-shadow-primary/50 ${
                        isActive
                          ? "text-primary text-shadow-md text-shadow-primary"
                          : "text-foreground"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div 
                className="flex flex-col gap-4 mt-8"
                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              >
                <Button as="a" href="#" variant="default" shape="default" className="text-sm px-6 py-3">
                  Daftar Sekarang
                </Button>
                <Button as="a" href="#" variant="secondary" shape="default" className="text-sm px-6 py-3">
                  Lihat GuideBook
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}