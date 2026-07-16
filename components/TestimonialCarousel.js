"use client";

import { useEffect, useRef } from "react";

export default function TestimonialCarousel({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const track = root.querySelector("#testimonialTrack");
    const dots = root.querySelectorAll("#dotsNav .dot");
    const slides = root.querySelectorAll(".testimonial-slide");
    const prevBtn = root.querySelector("#prevBtn");
    const nextBtn = root.querySelector("#nextBtn");

    if (!track || !slides.length || !prevBtn || !nextBtn) return;

    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoplayTimer;

    function goToSlide(index) {
      currentIndex = (index + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    }

    function restartAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => goToSlide(currentIndex + 1), 6000);
    }

    const dotHandlers = [];
    dots.forEach((dot) => {
      const handler = () => {
        goToSlide(parseInt(dot.getAttribute("data-index"), 10));
        restartAutoplay();
      };
      dot.addEventListener("click", handler);
      dotHandlers.push([dot, handler]);
    });

    const onNext = () => {
      goToSlide(currentIndex + 1);
      restartAutoplay();
    };
    const onPrev = () => {
      goToSlide(currentIndex - 1);
      restartAutoplay();
    };
    nextBtn.addEventListener("click", onNext);
    prevBtn.addEventListener("click", onPrev);

    let touchStartX = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        restartAutoplay();
      }
    };
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });

    goToSlide(0);
    restartAutoplay();

    return () => {
      clearInterval(autoplayTimer);
      dotHandlers.forEach(([dot, handler]) => dot.removeEventListener("click", handler));
      nextBtn.removeEventListener("click", onNext);
      prevBtn.removeEventListener("click", onPrev);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
