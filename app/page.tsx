import { Mail, MessageCircle, HelpCircle, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dibby Support</h1>
          <p className="text-gray-600 mt-2">เราพร้อมช่วยเหลือคุณ</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">ติดต่อเรา</h2>
          </div>

          <p className="text-gray-600 mb-6">
            หากคุณมีคำถาม ข้อสงสัย หรือต้องการความช่วยเหลือ
            สามารถติดต่อเราได้ทางอีเมล
          </p>

          <a
            href="mailto:nattakit.len@icloud.com"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            nattakit.len@icloud.com
          </a>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              คำถามที่พบบ่อย
            </h3>
            <p className="text-gray-600 text-sm">
              ค้นหาคำตอบสำหรับคำถามทั่วไปเกี่ยวกับการใช้งาน Dibby
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              แจ้งปัญหา
            </h3>
            <p className="text-gray-600 text-sm">
              พบข้อผิดพลาดหรือต้องการแนะนำฟีเจอร์ใหม่? ติดต่อเราได้เลย
            </p>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                เวลาในการตอบกลับ
              </h3>
              <p className="text-gray-700 text-sm">
                ทีมงานของเราจะตอบกลับภายใน 24-48 ชั่วโมง (วันทำการ)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2024 Dibby. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
