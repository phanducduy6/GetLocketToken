// Tên file: GetLocketToken.js
let headers = $request.headers;
let auth = headers["Authorization"] || headers["authorization"];

if (auth && auth.indexOf("Bearer ey") !== -1) {
    let token = auth.replace("Bearer ", ""); // Lọc bỏ chữ Bearer, chỉ giữ lại mã
    
    // Gửi thông báo hệ thống (Bạn có thể nhấn giữ thông báo trên iOS để Copy)
    $notification.post(
        "🔑 Bắt thành công Locket Token!", 
        "Nhấn giữ thông báo này để Copy mã", 
        token
    );
    
    // Ghi log trực tiếp vào màn hình console của Shadowrocket để dự phòng
    console.log("=== LOCKET TOKEN CỦA BẠN ===");
    console.log(token);
    console.log("============================");
}

// Trả gói tin đi nguyên vẹn, không chỉnh sửa gì để app Locket vẫn hoạt động bình thường
$done({});
