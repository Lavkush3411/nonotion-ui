"use client";
import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import UserItems from "./UserItems";

function Navigation() {
  const pathName = usePathname();
  console.log(pathName);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const showMenuIcon = isLoaded && isCollapsed;

  useEffect(() => {
    if (sidebarRef.current && navbarRef.current) {
      if (isMobile && !isCollapsed) {
        sidebarRef.current.style.width = "100%";
      } else if (!isMobile && !isCollapsed) {
        sidebarRef.current.style.setProperty("width", "240px");
      } else if (isMobile && isCollapsed) {
        sidebarRef.current.style.setProperty("width", "0");
      }
    }
  }, [isMobile, isCollapsed]);

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [isMobile]);

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
    }
  };
  const handleMouseUp = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleResetNavbarSize = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (sidebarRef.current && navbarRef.current) {
      setIsResetting(true);
      sidebarRef.current.style.width = "240px";
      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };

  const toggleNavbar = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(!isCollapsed);
      setIsResetting(true);
      if (isCollapsed) {
        sidebarRef.current.style.width = "240px";
      } else {
        sidebarRef.current.style.width = "0";
      }
      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col w-60 z-[9999]",
          isResetting && "transition-all ease-in-out",
          isLoaded && isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={cn(
            " h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:bg-neutral-500 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isLoaded && isMobile && "opacity-100"
          )}
          onClick={toggleNavbar}
        >
          <ChevronsLeft />
        </div>
        <div>
          <UserItems />
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full bg-primary/10 w-1 right-0 top-0"
          onMouseDown={handleMouseDown}
          onClick={handleResetNavbarSize}
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-0 px-3 py-3 ",
          isResetting && "transition-all ease-in-out duration-300",
          isLoaded && isMobile && "left-0 w-full"
        )}
      >
        <nav>
          {showMenuIcon && (
            <MenuIcon
              onClick={toggleNavbar}
              className="h-6 w-6 text-muted-foreground "
            />
          )}
        </nav>
      </div>
    </>
  );
}

export default Navigation;
