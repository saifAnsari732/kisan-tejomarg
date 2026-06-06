"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function SocialSidebar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const socials = [
    {
      name: "Facebook",
      color: "#1877F2",
      url: "https://www.facebook.com/tejomarg/",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      color: "gradient",
      url: "https://www.instagram.com/5starlaptopadda/",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      color: "#1DA1F2",
      url: "https://x.com/tejomarg",
      icon: <FaTwitter />,
    },
    {
      name: "YouTube",
      color: "#FF0000",
      url: "https://www.youtube.com/@Tejomarg",
      icon: <FaYoutube />,
    },
    {
      name: "Pinterest",
      color: "#E60033",
      url: "https://in.pinterest.com/tejomarg/",
      icon: <FaPinterestP />,
    },
  ];

  const getBg = (item) => {
    if (item.color === "gradient") {
      return {
        background:
          "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
      };
    }
    return { background: item.color };
  };

  return (
    <>
      <style jsx>{`
        .wrapper {
          position: fixed;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .item {
          display: flex;
          align-items: center;
          border-radius: 50px;
          padding: 10px 12px;
          width: 45px;
          overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          cursor: pointer;
        }

        .item:hover {
          width: 170px;
          transform: translateX(6px) scale(1.05);
        }

        .icon {
          font-size: 18px;
          color: #fff;
          min-width: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .text {
          color: #fff;
          margin-left: 12px;
          font-weight: 500;
          opacity: 0;
          transition: 0.3s;
          white-space: nowrap;
        }

        .item:hover .text {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .wrapper {
            display: none;
          }
        }
      `}</style>

      <div className="wrapper">
        <div className="sidebar">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="item"
              style={getBg(item)}
            >
              <div className="icon">{item.icon}</div>
              <span className="text">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}