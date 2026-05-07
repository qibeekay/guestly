import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "../components/props/Button";
import { getImageSrc } from "../utils/imageUtils";
import { MenuIcon } from "../utils/icons";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Vendors", href: "/vendors" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "Near Me", href: "/near-me" },
  { label: "Search", href: "/search" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return activePath === "/";
    }
    return activePath === href || activePath.startsWith(`${href}/`);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 w-full z-50 bg-dark/40 backdrop-blur-sm border-b border-[#0873AB] py-6"
    >
      <div className="mx-auto max-w-360 px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={getImageSrc("logo.svg")} alt="" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  className={`text-xl transition-colors relative group ${
                    active ? "text-[#D4FF00]" : "text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4FF00] transition-all duration-300 w-0 group-hover:w-full`}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => navigate("/auth/signup")}
                variant="primary"
              >
                Sign Up
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="white" onClick={() => navigate("/auth/signin")}>
                Sign In
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <MenuIcon />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B1D2E]/95 backdrop-blur-lg border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`block text-lg font-medium ${
                      active
                        ? "text-[#D4FF00]"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="flex gap-3 pt-4">
                <Button onClick={() => navigate("/auth/signup")}>
                  Sign Up
                </Button>
                <Button
                  onClick={() => navigate("/auth/signin")}
                  variant="white"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
