
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { user, isLoading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">ยินดีต้อนรับ</h1>
        <p className="text-lg text-gray-600 mb-6">
          {user 
            ? `สวัสดี, ${user.email}`
            : "เข้าสู่ระบบหรือลงทะเบียนเพื่อเริ่มใช้งาน"}
        </p>

        {isLoading ? (
          <p>กำลังโหลด...</p>
        ) : user ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              คุณได้เข้าสู่ระบบแล้ว
            </p>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Link to="/login">
              <Button className="w-full mb-2">เข้าสู่ระบบ</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="w-full">ลงทะเบียน</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
