"use client";

import { useEffect, useState } from "react";

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
      icon: "facebook",
    },
    {
      name: "Instagram",
      color: "gradient",
      url: "https://www.instagram.com/tejomarg/",
      icon: "instagram",
    },
    {
      name: "Twitter",
      color: "#1DA1F2",
      url: "https://x.com/tejomarg",
      icon: "twitter",
    },
    {
      name: "YouTube",
      color: "#FF0000",
      url: "https://www.youtube.com/@Tejomarg",
      icon: "youtube",
    },
    {
      name: "Pinterest",
      color: "#E60033",
      url: "https://in.pinterest.com/tejomarg/",
      icon: "pinterest",
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

  const iconStyle = { width: 20, height: 20, fill: "#fff" };

  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.4 3h-2.7v7A10 10 0 0022 12z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10z"/>
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 001.7-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.8 3.6A11.3 11.3 0 013 4.9a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 003.2 3.9A8 8 0 012 18.6a11.3 11.3 0 006.1 1.8c7.3 0 11.3-6 11.3-11.3z"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M23 7s-.2-1.5-.8-2.2c-.7-.9-1.5-.9-1.9-1C17.6 3.5 12 3.5 12 3.5s-5.6 0-8.3.3c-.4.1-1.2.1-1.9 1C1.2 5.5 1 7 1 7s0 1.7 0 3.4v1.2C1 13.3 1 15 1 15s.2 1.5.8 2.2c.7.9 1.6.9 2 .9 1.5.2 6.2.3 6.2.3s5.6 0 8.3-.3c.4-.1 1.2-.1 1.9-1 .6-.7.8-2.2.8-2.2s0-1.7 0-3.4v-1.2C23 8.7 23 7 23 7z"/>
      </svg>
    ),
    pinterest: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M12 2a10 10 0 00-3.6 19.3c.5-1.4 1.3-3.6 1.3-3.6s-.3-.6-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.3 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.5 0 .9.3 1.9.8 2.4.1.1.1.2.1.3-.1.3-.2 1-.3 1.2 0 .2-.2.2-.3.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.2 6.7-6.2 3.5 0 6.2 2.5 6.2 5.9 0 3.5-2.2 6.4-5.3 6.4-1 0-2-.5-2.3-1.1l-.6 2.3c-.2.8-.8 1.9-1.2 2.5.9.3 1.8.4 2.8.4a10 10 0 000-20z"/>
      </svg>
    ),
  };

  return (
    <>
      <style jsx>{`
        .wrapper {
          position: fixed;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .item {
          display: flex;
          align-items: center;
          border-radius: 50px;
          padding: 10px 14px;
          width: 50px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.2);
          backdrop-filter: blur(8px);
        }

        .item:hover {
          width: 160px;
          transform: translateX(5px) scale(1.05);
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 20px;
        }

        .text {
          color: #fff;
          margin-left: 10px;
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
              className="item"
              style={getBg(item)}
            >
              <div className="icon">{icons[item.icon]}</div>
              <span className="text">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}