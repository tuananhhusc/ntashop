# NTA Shop - Trang Web Bán Hàng

## Mô tả
NTA Shop là một trang web bán hàng hiện đại, chuyên cung cấp các phần mềm và dịch vụ số chất lượng cao. Trang web được thiết kế với giao diện đẹp mắt, responsive và các tính năng tương tác tiên tiến.

## Tính năng chính

### 🛍️ Danh mục sản phẩm
- **Làm Việc**: Microsoft Office, CamScanner Premium, Notion
- **Học Tập**: Grammarly, Quizlet, Datacamp, QuillBot, Hello Chinese, Busuu, JetBrains All Products Pack
- **Edit Ảnh - Video**: Adobe Creative, CapCut Pro, Freepik, Picsart, HeyGen Create, Doodly, Wondershare Filmora, Photoroom
- **VPN & Bảo mật**: HMA VPN, ExpressVPN, AVG VPN, Avast VPN, AdGuard VPN, NordVPN

### 🎨 Thiết kế
- Giao diện hiện đại với gradient màu sắc đẹp mắt
- Responsive design cho mọi thiết bị
- Animation mượt mà và hiệu ứng hover
- Typography rõ ràng, dễ đọc

### ⚡ Tính năng tương tác
- Navigation cố định với smooth scrolling
- Tìm kiếm sản phẩm real-time
- Giỏ hàng với thông báo
- Nút scroll to top
- Lazy loading cho hiệu suất tốt hơn

## Cấu trúc dự án

```
shopnta/
├── index.html          # Trang chính
├── styles.css          # File CSS
├── script.js           # File JavaScript
└── README.md           # Hướng dẫn sử dụng
```

## Cách sử dụng

### 1. Mở trang web
- Mở file `index.html` trong trình duyệt web
- Hoặc sử dụng live server để chạy local

### 2. Điều hướng
- Sử dụng menu navigation để di chuyển giữa các phần
- Click vào "Khám phá ngay" để xem sản phẩm
- Sử dụng nút scroll to top để quay lại đầu trang

### 3. Tìm kiếm sản phẩm
- Click vào nút tìm kiếm (nếu có)
- Nhập tên sản phẩm cần tìm
- Kết quả hiển thị real-time

### 4. Mua sản phẩm
- Click "Mua ngay" trên sản phẩm mong muốn
- Sản phẩm sẽ được thêm vào giỏ hàng
- Thông báo xác nhận sẽ hiển thị

## Tùy chỉnh

### Thay đổi thông tin liên hệ
Chỉnh sửa phần footer trong `index.html`:
```html
<div class="contact-item">
    <i class="fab fa-facebook"></i>
    <a href="YOUR_FACEBOOK_LINK" target="_blank">Fanpage Facebook</a>
</div>
```

### Thêm sản phẩm mới
Thêm sản phẩm vào danh mục tương ứng trong `index.html`:
```html
<div class="product-card">
    <h4>Tên sản phẩm</h4>
    <p>Mô tả sản phẩm</p>
    <button class="buy-btn">Mua ngay</button>
</div>
```

### Thay đổi màu sắc
Chỉnh sửa biến CSS trong `styles.css`:
```css
.header {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

## Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và responsive design
- **JavaScript ES6+**: Tính năng tương tác
- **Font Awesome**: Icons
- **CSS Grid & Flexbox**: Layout hiện đại

## Tương thích trình duyệt

- ✅ Chrome (khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Hỗ trợ

Để được hỗ trợ hoặc báo cáo vấn đề, vui lòng liên hệ:
- **Fanpage Facebook**: [Link Facebook]
- **Telegram**: [Link Telegram]
- **Email**: contact@ntashop.com
- **Thread**: [Link Thread]

## Giấy phép

© 2024 NTA Shop. Tất cả quyền được bảo lưu.

---

**Lưu ý**: Đây là trang web demo. Để sử dụng trong mục đích thương mại, vui lòng cập nhật thông tin liên hệ và tích hợp hệ thống thanh toán thực tế.
