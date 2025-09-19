import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Carousel.css"   // ✅ import CSS here

export default function Carousel() {
  const images = [
    { src: "https://asset.allen.in/4c2e6e11-bd4d-43db-8b1e-ce9ff9ad21ad/sc/image_preview_extra_large/secondaryContent.png?__ar__=3.16&__name__=Web%20Combined%20students%20Banner%20(Home%20Page)", link: "/Courses" },
    { src: "https://asset.allen.in/72e434fd-641f-42a5-a0ee-45e0ceff0991/sc/image_preview_extra_large/secondaryContent.png?__ar__=3.16&__name__=NEET%20Toppers%20Web%20banner%20(Home%20Page)", link: "/Test Series" },
    { src: "https://asset.allen.in/e4f13e4b-cdf4-47ee-8c28-3d4eeedfca2f/sc/image_preview_extra_large/secondaryContent.png?__ar__=3.16&__name__=Group%201171283463", link: "/Classroom" },
    { src: "https://asset.allen.in/15d9b849-dcf7-4478-ad37-b88f489b5c26/sc/image_preview_extra_large/secondaryContent.png?__ar__=3.16&__name__=Group%201171283466", link: "/Results" },
    { src: "https://asset.allen.in/29a1a2d9-3e01-4566-8273-35974d9dee8d/original.png?__ar__=3.155819", link: "/Study Materials" },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000) // auto-slide every 5 sec
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="carousel">
      <button
        className="carousel-btn left"
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
      >
        ◀
      </button>

      <Link to={images[current].link}>
        <img
          src={images[current].src}
          alt="carousel"
          className="carousel-image"
        />
      </Link>

      <button
        className="carousel-btn right"
        onClick={() => setCurrent((current + 1) % images.length)}
      >
        ▶
      </button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  )
}
