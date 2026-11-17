import Link from 'next/link'
import Image from 'next/image'

// หน้าต้อนรับ (ก่อนเข้าสู่ระบบ) มือถือเรียงบนลงล่าง | PC แบ่งสองคอลัมน์
export default function WelcomeView() {
  return (
    <main className="welcome">
      <header className="welcome-head">
        <div>
          <h1 className="welcome-title">Dashcam Patrol</h1>
          <p className="welcome-sub">รู้ทุกพิกัดเสี่ยง จัดการก่อนเกิดเหตุ</p>
        </div>
        <Image
          className="welcome-logo"
          src="/pea-logo.png"
          alt="การไฟฟ้าส่วนภูมิภาค"
          width={96}
          height={96}
          priority
        />
      </header>

      <div className="welcome-art">
        <img
          src="/phone.svg"
          alt="แอปบนมือถือแสดงเส้นทางรถปฏิบัติการและจุดเสี่ยงที่ตรวจพบบนแผนที่"
          draggable="false"
        />
      </div>

      <div className="welcome-cta">
        <Link className="btn btn-gold welcome-btn" href="/login">
          เริ่มต้นใช้งาน
        </Link>
      </div>
    </main>
  )
}
