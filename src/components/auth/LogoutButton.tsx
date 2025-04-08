
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export function LogoutButton() {
  const { signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant="outline" 
      size="sm"
      disabled={isLoading}
    >
      {isLoading ? "กำลังออกจากระบบ..." : "ออกจากระบบ"}
    </Button>
  );
}
