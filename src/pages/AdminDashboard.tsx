
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">หน้าผู้ดูแลระบบ</h1>
        <p className="text-gray-600 mb-6">
          ยินดีต้อนรับ, {user?.email}
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded border">
            <h2 className="font-medium mb-2">การจัดการระบบ</h2>
            <p className="text-sm text-gray-500 mb-2">ส่วนนี้สำหรับผู้ดูแลระบบเท่านั้น</p>
            <Button className="w-full" variant="outline">จัดการข้อมูล</Button>
          </div>
          
          <div className="flex flex-col gap-2">
            <Link to="/" className="w-full">
              <Button variant="outline" className="w-full">กลับสู่หน้าหลัก</Button>
            </Link>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
