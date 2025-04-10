function updateClock() {
    const now = new Date(); // Lấy thời gian hiện tại
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "AM";

    // Xử lý định dạng AM/PM
    if (hours >= 12) {
        session = "PM";
    }
    if (hours === 0) {
        hours = 12; // Giờ 0 được đổi thành 12 AM
    } else if (hours > 12) {
        hours = hours - 12; // Chuyển đổi giờ sang định dạng 12 giờ
    }

    // Thêm số 0 phía trước nếu giờ, phút, giây nhỏ hơn 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Hiển thị giờ, phút, giây
    const currentTime = `${hours}:${minutes}:${seconds} ${session}`;

    // Đưa thời gian lên HTML
    document.getElementById('clock').textContent = currentTime;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);

// Gọi hàm ngay lập tức để tránh độ trễ 1 giây ban đầu
updateClock();
