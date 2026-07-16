"use client";

import { useEffect, useRef } from "react";

const PAGE_SIZE = 6;

function getPageList(current, total) {
  const delta = 1;
  const range = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }
  const withDots = [];
  let prev = 0;
  range.forEach((p) => {
    if (prev && p - prev > 1) withDots.push("...");
    withDots.push(p);
    prev = p;
  });
  return withDots;
}

function buildPaginationHTML(current, total) {
  let html = "";
  html += `<a href="#" data-page="${current - 1}" class="${
    current === 1 ? "disabled" : ""
  }" aria-label="Previous page"><i class="bi bi-chevron-left"></i></a>`;

  getPageList(current, total).forEach((p) => {
    if (p === "...") {
      html += `<span class="dots">...</span>`;
    } else {
      html += `<a href="#" data-page="${p}" class="${p === current ? "active" : ""}">${p}</a>`;
    }
  });

  html += `<a href="#" data-page="${current + 1}" class="${
    current === total ? "disabled" : ""
  }" aria-label="Next page"><i class="bi bi-chevron-right"></i></a>`;

  return html;
}

export default function BlogFilterPagination({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const filterBtns = root.querySelectorAll(".blog-filter-btn");
    const allCards = Array.from(root.querySelectorAll(".blog-card"));
    const grid = root.querySelector(".blog-grid");
    const paginationEl = root.querySelector("#blogPagination");
    const noResultsEl = root.querySelector("#blogNoResults");

    if (!allCards.length || !grid || !paginationEl) return;

    const state = { filter: "all", page: 1 };

    function render() {
      const filtered = allCards.filter(
        (card) => state.filter === "all" || card.getAttribute("data-category") === state.filter
      );
      const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

      if (state.page > totalPages) state.page = totalPages;
      if (state.page < 1) state.page = 1;

      const start = (state.page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      let visibleIndex = 0;
      allCards.forEach((card) => {
        const matches = state.filter === "all" || card.getAttribute("data-category") === state.filter;
        if (!matches) {
          card.style.display = "none";
          return;
        }
        const withinPage = visibleIndex >= start && visibleIndex < end;
        card.style.display = withinPage ? "" : "none";
        visibleIndex++;
      });

      if (noResultsEl) noResultsEl.style.display = filtered.length === 0 ? "" : "none";
      grid.style.display = filtered.length === 0 ? "none" : "";

      if (totalPages <= 1) {
        paginationEl.style.display = "none";
        paginationEl.innerHTML = "";
        return;
      }

      paginationEl.style.display = "flex";
      paginationEl.innerHTML = buildPaginationHTML(state.page, totalPages);
    }

    const filterHandlers = [];
    filterBtns.forEach((btn) => {
      const handler = () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.filter = btn.getAttribute("data-filter");
        state.page = 1;
        render();
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      btn.addEventListener("click", handler);
      filterHandlers.push([btn, handler]);
    });

    const onPaginationClick = (e) => {
      const link = e.target.closest("a[data-page]");
      if (!link || link.classList.contains("disabled")) return;
      e.preventDefault();
      const page = parseInt(link.getAttribute("data-page"), 10);
      if (isNaN(page)) return;
      state.page = page;
      render();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    paginationEl.addEventListener("click", onPaginationClick);

    render();

    return () => {
      filterHandlers.forEach(([btn, handler]) => btn.removeEventListener("click", handler));
      paginationEl.removeEventListener("click", onPaginationClick);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
