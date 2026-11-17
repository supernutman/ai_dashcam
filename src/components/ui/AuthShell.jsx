import Image from 'next/image'

// กรอบหน้าฟอร์มแบบเต็มจอ (Log In / Reset Password)
// มือถือ: แผ่นสีบานเย็นเต็มจอ มีแผ่นซ้อนด้านบน | PC: การ์ดอยู่กลางจอ
export default function AuthShell({ title, children }) {
  return (
    <main className="auth">
      <div className="auth-stack">
        <section className="auth-sheet" aria-labelledby="auth-title">
          <Image
            className="auth-logo"
            src="/pea-logo.png"
            alt="การไฟฟ้าส่วนภูมิภาค"
            width={98}
            height={98}
            priority
          />
          <h1 id="auth-title" className="auth-title">
            {title}
          </h1>
          {children}
        </section>
      </div>
    </main>
  )
}
