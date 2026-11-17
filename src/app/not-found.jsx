import Link from 'next/link'
import Layout from '@/components/layout/Layout'

export default function NotFound() {
  return (
    <Layout>
      <section className="placeholder">
        <h1>ไม่พบหน้านี้</h1>
        <p>ลองกลับไปที่หน้าแรก</p>
        <div style={{ marginTop: '24px' }}>
          <Link href="/" className="btn btn-gold btn-sm">
            กลับหน้าแรก
          </Link>
        </div>
      </section>
    </Layout>
  )
}
