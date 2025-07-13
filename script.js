 // ฐานข้อมูลผู้ใช้จำลอง
  const users = [
    { username: "admin", password: "beam" },
    { username: "admin", password: "toon" },
    { username: "ohm", password: "shadow" }
  ];

  // ดึงองค์ประกอบจาก HTML
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("user");
  const passwordInput = document.getElementById("passwd");
  const message = document.getElementById("message");

  // เพิ่ม event listener ตอนกด Login
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // ค้นหาใน "ฐานข้อมูลจำลอง"
    const foundUser = users.find(user =>
      user.username === username && user.password === password
    );

    if (foundUser) {
      message.textContent = "✅ Login สำเร็จ! กำลังเข้าสู่ระบบ...";
      message.style.color = "green";

      // ไปหน้า index.html หลัง 1 วินาที
      setTimeout(() => {
        window.location.href = "../home/index.html";
      }, 1000);
    } else {
      message.textContent = "❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
      message.style.color = "red";
    }
});