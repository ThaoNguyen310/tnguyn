import Image from "next/image";
import styles from "./footer.module.css";
export function Footer() {
    return (
        <div className={styles.note}>
        <footer className={styles.footer}>
          <section className={styles.f_section}>
            <div className={styles.f_content}>Tổng Đài Hỗ Trợ
            <ul>
              <ol className={styles.ol}>Gọi Mua: 1900 232 461 (8:00 - 21:30)</ol>
              <ol className={styles.ol}>Khiếu Nại: 1800.1063 (8:00 - 21:30)</ol>
              <ol className={styles.ol}>Bảo Hành:1900 232 465 (8:00 - 21:00)</ol>
            </ul>
            </div>
            <div className={styles.f_content}>Về Công Ty
            <ul>
              <ol className={styles.ol}>Giới thiệu công ty (MWG.vn)</ol>
              <ol className={styles.ol}>Tuyển dụng</ol>
              <ol className={styles.ol}>Gửi góp ý, khiếu nại</ol>
              <ol className={styles.ol}>Tìm siêu thị (2961 shop)</ol>
            </ul></div>
            <div className={styles.f_content}>Thông tin Khác
            <ol className={styles.ol}>Tích điểm Quà tặng VIP </ol>
            <ol className={styles.ol}>Lịch sử mua hàng</ol>
            <ol className={styles.ol}>Lịch sử mua hàng</ol>
            <ol className={styles.ol}>Đăng ký bán hàng CTV chiết khấu cao</ol>
            <ol className={styles.ol}>Tìm hiểu về mua trả chậm</ol>
            <ol className={styles.ol}>Xem thêm</ol>
            </div>
            <div className={styles.f_content}>Website cùng tập đoàn
            <ul>
            <ol><a rel="nofollow" href="https://www.thegioididong.com/" target="_blank" aria-label="logo thegioididong">
            <i className="iconlogo-thegioididong visible"></i></a>
            </ol>
            </ul>
            </div>
          </section>
          <div className={styles.copyright}><p>
                  © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.<br/>
                  Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh.
                   Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email:  hotrotmdt@thegioididong.com.</p></div>
        </footer>
      </div>
    )
}