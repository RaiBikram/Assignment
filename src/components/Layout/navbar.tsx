"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import NavbarTop from "./top";

// Define types for menu items with proper links
interface MenuItem {
  title: string;
  href: string;
}

interface MenuSection {
  name: string;
  href: string; // Parent menu href
  items: MenuItem[];
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (menu: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Define navigation menus with proper links
  const navigationMenus: MenuSection[] = [
    {
      name: "Teams",
      href: "/our-teams",
      items: [
        { title: "GAC Members", href: "/teams/gac-members" },
        { title: "International Teams", href: "/teams/international" },
        { title: "Advisory Teams", href: "/teams/advisory" },
        { title: "Country Directors", href: "/teams/country-directors" },
      ],
    },
    {
      name: "Conference",
      href: "/conference",
      items: [
        { title: "GAC2022", href: "/conference/2022" },
        { title: "GAC2023", href: "/conference/2023" },
        { title: "GAC2024", href: "/conference/2024" },
        { title: "GAC2025", href: "/conference/2025" },
        { title: "GAC2026", href: "/conference/2026" },
      ],
    },
    {
      name: "Council",
      href: "/council/human-rights",
      items: [
        { title: "Human Rights, Peace & Security", href: "/council/human-rights" },
        { title: "Environment & Biodiversity", href: "/council/environment" },
        { title: "SDG", href: "/council/sdg" },
        { title: "Science & Technology", href: "/council/science-technology" },
        { title: "International Affairs & Diplomacy", href: "/council/international-affairs" },
        { title: "Trade & Economy", href: "/council/trade-economy" },
        { title: "Youth & Education", href: "/council/youth-education" },
        { title: "Information and Communication", href: "/council/information-communication" },
      ],
    },
    {
      name: "Resources",
      href: "/resources/blog",
      items: [
        { title: "Opportunity", href: "/resources/opportunities" },
        { title: "Media", href: "/resources/media" },
        { title: "Blogs", href: "/resources/blogs" },
        { title: "Studies & Report", href: "/resources/study-report" },
        { title: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <>
      <NavbarTop />
      <header className="bg-white py-4 border-b">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo Section */}
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/">
              <Image
                src="/navLogo.webp"
                alt="Global Act Council Logo"
                width={600}
                height={600}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-black font-bold relative">
            <Link
              href="/about-us"
              className="text-sm font-medium hover:text-blue-500"
            >
              About Us
            </Link>

            {navigationMenus.map((menu) => (
              <div
                key={menu.name}
                className="relative"
                ref={(el) => { dropdownRefs.current[menu.name] = el; }}
              >
                <div className="flex items-center">
                  <Link
                    href={menu.href}
                    className="text-sm font-medium hover:text-blue-500 mr-1"
                  >
                    {menu.name}
                  </Link>
                  <button
                    onClick={(e) => toggleDropdown(menu.name, e)}
                    className="text-sm hover:text-blue-500"
                    aria-label={`Toggle ${menu.name} dropdown`}
                    aria-expanded={activeDropdown === menu.name}
                  >
                    {activeDropdown === menu.name ? (
                      <RiArrowUpSLine />
                    ) : (
                      <RiArrowDownSLine />
                    )}
                  </button>
                </div>
                
                {activeDropdown === menu.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white  rounded shadow-lg z-10">
                    {menu.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/stories"
              className="text-sm font-medium hover:text-blue-500"
            >
              Stories
            </Link>
            <Link
              href="/membership"
              className="text-sm font-medium hover:text-blue-500"
            >
              Membership
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;