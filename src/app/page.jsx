import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import WelcomeView from '@/components/home/WelcomeView'

export default function HomePage() {
  return (
    <>
      {/* บนหน้าจอเดสก์ท็อป: แสดง Navbar + Hero */}
      <div className="desktop-only">
        <Layout>
          <Hero />
        </Layout>
      </div>

      {/* บนหน้าจอมือถือ (<= 760px): แสดง Welcome View เต็มจอตามโปรเจคเดิม */}
      <div className="mobile-only">
        <WelcomeView />
      </div>
    </>
  )
}
