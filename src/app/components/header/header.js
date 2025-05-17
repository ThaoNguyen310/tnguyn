import Image from "next/image";
import styles from "./header.module.css";


export function Header() {
  return (
    <div className={styles.header}>
    <div className={styles.nav}>
      <ul>
        <li className={styles.li}> <a href="/">Trang Chủ</a></li>
        <li className={styles.li}> <a href="/gioithieu">Giới Thiệu</a></li>
        <li className={styles.li}> <a href="/baiviet">Bài Viết</a></li>
        <li className={styles.li}> <a href="/lienhe">Liên Hệ</a></li>
        <li className={styles.li}> <a href="/chitietsp">Chi Tiết Sản Phẩm</a></li>
      </ul>
    </div>
    <div className={styles.logo}><Image className={styles.logo} src="/hanh.png" alt="logo" width={640} height={452}/></div>
    </div>
  );
}
