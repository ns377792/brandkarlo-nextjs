"use client";

import { useEffect, useRef } from "react";

// Generic filter widget: any container with `.filter-btn[data-filter]` buttons
// and `.card[data-category]` items. Mirrors the original main.js behavior.
export default function FilterGrid({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const filterBtns = root.querySelectorAll(".filter-btn");
    const cards = root.querySelectorAll(".card");
    if (!filterBtns.length || !cards.length) return;

    const handlers = [];

    filterBtns.forEach((btn) => {
      const handler = () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");

        cards.forEach((card) => {
          const category = card.getAttribute("data-category");
          const show = filter === "all" || filter === category;

          if (show) {
            card.style.display = "";
            requestAnimationFrame(() => {
              card.style.opacity = "0";
              card.style.transform = "translateY(8px)";
              requestAnimationFrame(() => {
                card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              });
            });
          } else {
            card.style.display = "none";
          }
        });
      };
      btn.addEventListener("click", handler);
      handlers.push([btn, handler]);
    });

    return () => {
      handlers.forEach(([btn, handler]) => btn.removeEventListener("click", handler));
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
