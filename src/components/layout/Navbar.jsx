'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/live-map', label: 'Live Map' },
  { path: '/risk-reports', label: 'Risk Reports' },
  { path: '/how-it-works', label: 'How it Works' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="nav">
      <Link className="brand" href="/">
        <Image
          className="logo"
          src="/pea-logo.png"
          alt="การไฟฟ้าส่วนภูมิภาค"
          width={80}
          height={80}
          priority
        />
        <span className="brand-name">ตรวจจับความเสี่ยง ก่อนเกิดปัญหา</span>
      </Link>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? 'ปิดเมนู' : 'เปิดเมนู'}</span>
        <span className="bars" aria-hidden="true" />
      </button>

      <nav id="nav-menu" className={`nav-menu ${open ? 'is-open' : ''}`}>
        <ul>
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link
                href={l.path}
                aria-current={pathname === l.path ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="nav-divider" aria-hidden="true" />
        <Link className="btn btn-gold btn-sm" href="/login" onClick={() => setOpen(false)}>
          Log In
        </Link>
      </nav>
    </header>
  )
}
