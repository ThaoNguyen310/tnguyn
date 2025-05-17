"use client";
import Link from "next/link";
import {  useEffect, useState } from "react";
// import KmSlider from "../components/slider/kmslider";
import SimpleSlider from "../components/slider/slider";
import styles from "./chitietsp.module.css";
export default function ChiTietSanPham(params) {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState("");


  useEffect(() => {
    async function fetchProductId(params) {
      const { productId } = await params;
      setProductId(productId);
    }
    fetchProductId(params.params);
  }, [params]);


  useEffect(() => {
    async function fetchProduct(productId) {
      try {
        if (!productId) {
          console.log("Product ID is null");
          return;
        }
        const response = await fetch(`/api/products/${productId}`);
        const result = await response.json();
        if (response.ok) {
          setProduct(result.product);
        } else {
          console.log("Error fetching product:", result.error);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    }
    fetchProduct(productId);
  }, [productId]);
  return (
    <div className={styles.chitietsanpham}>
      {product && (
        <div className={styles.mainContent}>
          <div className={styles.gioithieu}>
            <div className={styles.hinhanh}>
              <div className={styles.slider}>
                <SimpleSlider></SimpleSlider>
              </div>
            </div>
            <div className={styles.gia}>
              <div className={styles.giaban}>
                <h3>{product?.productName}</h3>
                <p>
                  {(
                    product.productPrice -
                    (product.productPrice * product.percentDiscount) / 100
                  )?.toLocaleString("vi-VN")}
                  ₫
                  <span className={styles.giacu}>
                    {product.productPrice?.toLocaleString("vi-VN")}₫
                  </span>
                </p>
              </div>
              <div className={styles.khuyenmai}>
                <div className={styles.kmslider}>
                  {/* <KmSlider /> */}
                </div>
              </div>
              <div className={styles.muangay}>
                <div className={styles.nutmua}>
                  <Link href="/giohang">Mua ngay</Link>
                  <span className={styles.giaohang}>
                    Giao hàng tận nơi hoặc nhận tại cửa hàng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mota}>
            <div
              dangerouslySetInnerHTML={{ __html: product?.productDescription }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}





























// import styles from "@/app/chitietsp/chitietsp.module.css";
// import SimpleSlider from "../components/slider/slider";
// export default function Chitietsp() {
//   const data=`
//   <div id="des-40747" class="flex-col w-full relative bg-white section-layout md:!p-4 no-scrollbar" style="height: auto; overflow-y: hidden;"><div class="relative  text-17 box-cmt text-justify"><blockquote id="s25-ultra-512gb" cite="https://didongviet.vn/dien-thoai/samsung-galaxy-s25-ultra-5g-512gb.html?s25-ultra-512gb"><strong><a title="Samsung Galaxy S25 Ultra 512GB" href="https://didongviet.vn/dien-thoai/samsung-galaxy-s25-ultra-5g-512gb.html">Samsung Galaxy S25 Ultra 512GB</a></strong> tiếp tục khẳng định vị thế dẫn đầu của Samsung trong dòng flagship cao cấp với hàng loạt cải tiến vượt bậc. Chiếc điện thoại này không chỉ là một thiết bị di động thông thường mà còn là sự kết hợp hoàn hảo giữa công nghệ đột phá, thiết kế tinh tế và hiệu năng vượt trội.</blockquote>
// <h2>1. Đặc điểm nổi bật của Samsung Galaxy S25 Ultra 512GB</h2>
// <p>Chip Snapdragon 8 Gen 4 mạnh mẽ, sản xuất trên tiến trình 3nm, mang lại hiệu năng vượt trội, xử lý mọi tác vụ nặng một cách mượt mà.</p>
// <ul class="inlink-topic">
// <li>Màn hình <strong>Dynamic LTPO AMOLED 2X </strong>kích thước <strong>6.9 inch</strong>, độ phân giải <strong>Quad HD+</strong>, tần số quét <strong>120Hz </strong>giúp hiển thị sắc nét và mượt mà trong mọi điều kiện ánh sáng.</li>
// <li><strong>Camera chính 200MP</strong>, hỗ trợ quay video 8K, zoom quang học tiên tiến từ 2x-10x, mang lại trải nghiệm chụp ảnh và quay phim chuyên nghiệp.</li>
// <li><strong>Dung lượng pin 5000 mAh</strong>, hỗ trợ sạc nhanh <strong>45W</strong>, đảm bảo thời lượng sử dụng bền bỉ và nạp đầy pin nhanh chóng.</li>
// <li><strong>Thiết kế cao cấp với khung titan</strong>, mỏng nhẹ mang lại cảm giác cầm nắm thoải mái và sang trọng.</li>
// <li><strong>Bộ nhớ khủng 512GB</strong>, dễ dàng lưu trữ hình ảnh, video, dữ liệu mà không cần lo lắng về dung lượng.</li>
// <li><strong>Hỗ trợ kết nối hiện đại:</strong> mạng 5G siêu tốc, Wi-Fi 7, NFC, Bluetooth 5.3 và cổng USB-C 3.2, đáp ứng mọi nhu cầu kết nối.</li>
// </ul>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416240683_samsung_galaxy_s25_ultra_5g_512gb.png" alt=""></p>
// <p>&nbsp;</p>
// <h2>2. Thiết kế</h2>
// <p>Samsung Galaxy S25 Ultra 512GB tiếp tục kế thừa và nâng cấp thiết kế cao cấp của dòng Ultra. Với khung máy được làm từ <strong>hợp kim titan</strong>, thiết bị không chỉ mang lại vẻ ngoài sang trọng mà còn tăng độ bền, chống va đập tốt hơn. Máy có <strong>thiết kế nguyên khối</strong> với các góc được bo cong mềm mại hơn so với thế hệ trước, giúp người dùng dễ dàng cầm nắm mà không bị cấn tay. Điểm nhấn đáng chú ý là độ mỏng ấn tượng chỉ <strong>8,4mm</strong>, biến Galaxy S25 Ultra 512GB trở thành chiếc flagship mỏng nhất kể từ dòng Galaxy Note 20 Ultra. Cụm camera phía sau vẫn giữ thiết kế tối giản, các ống kính được xếp dọc hài hòa, tạo nên vẻ đẹp hiện đại và tinh tế.</p>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416253195_samsung_galaxy_s25_ultra_5g_512gb_2.png" alt=""></p>
// <h2>3. Màn hình</h2>
// <p>Samsung Galaxy S25 Ultra 512GB sở hữu màn hình <strong>Dynamic LTPO AMOLED 2X</strong> kích thước <strong>6.9 inch</strong>, hỗ trợ độ phân giải lên <strong>Quad HD+ (3120 X 1440 pixels)</strong>. Với tần số quét <strong>120Hz</strong>, màn hình mang lại trải nghiệm vuốt chạm mượt mà, lý tưởng cho cả chơi game lẫn xem nội dung.</p>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416263899_samsung_galaxy_s25_ultra_5g_512gb_3.png" alt=""></p>
// <p>Độ sáng tối đa lên đến <strong>2600 nits</strong>, cao hơn mọi thế hệ trước, cho phép hiển thị rõ ràng ngay cả dưới ánh sáng mặt trời mạnh. <strong>Viền màn hình</strong> tiếp tục được làm mỏng tối đa, mang đến tỷ lệ hiển thị cao, giúp người dùng hoàn toàn đắm chìm trong các nội dung giải trí. Đây chắc chắn là một trong những màn hình đẹp nhất trên thị trường smartphone hiện tại.</p>
// <h2>4. Hiệu năng</h2>
// <p>Galaxy S25 Ultra 512GB được trang bị &nbsp;<strong>Snapdragon® 8 Elite for Galaxy,</strong>&nbsp;mang lại hiệu năng vượt trội so với thế hệ trước. Với <strong>8</strong> lõi CPU, trong đó có <strong>2</strong> lõi hiệu suất cao đạt tốc độ <strong>4.47GHz</strong>, thiết bị xử lý mọi tác vụ từ chơi game đồ họa nặng, chỉnh sửa video 4K đến các ứng dụng AI phức tạp một cách mượt mà.</p>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416280538_samsung_galaxy_s25_ultra_5g_512gb_4.png" alt=""></p>
// <p>Máy đi kèm với RAM <strong>12GB</strong> và bộ nhớ trong <strong>512GB</strong>, cho phép người dùng thoải mái lưu trữ dữ liệu và chạy đa nhiệm mà không gặp hiện tượng giật lag. Hệ điều hành <strong>Android 15</strong> với giao diện <strong>One UI 7</strong>&nbsp;mang lại trải nghiệm trực quan, dễ sử dụng và tối ưu hóa hiệu năng.</p>
// <h2>5. Camera</h2>
// <p>Samsung Galaxy S25 Ultra 512GB thực sự là một "nhà vô địch" trong lĩnh vực camera di động. Điểm nhấn chính là <strong>cảm biến camera chính</strong> độ phân giải <strong>200MP</strong>, mang lại khả năng chụp ảnh sắc nét với chi tiết vượt trội, ngay cả trong điều kiện ánh sáng yếu. Camera chính không chỉ mạnh mẽ ở khả năng chụp ảnh mà còn hỗ trợ quay video độ phân giải <strong>8K</strong>, giúp người dùng lưu lại những khoảnh khắc sống động với chất lượng chuyên nghiệp.</p>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416291272_samsung_galaxy_s25_ultra_5g_512gb_5.png" alt=""></p>
// <p>Ngoài ra, <strong>camera góc siêu rộng</strong> cũng được nâng cấp với độ phân giải <strong>50MP. </strong>Đi kèm với đó là 2 ống kính tele với phân giản lần lượt là <strong>50MP và 10MP, rất </strong>lý tưởng cho chụp phong cảnh hoặc những bức ảnh nhóm đông người. Nhưng điều đặc biệt nhất phải kể đến là camera tele cải tiến với khả năng zoom quang học lên đến 10<strong>x</strong>. Điều này không chỉ giúp bạn chụp được những chi tiết ở xa mà còn làm mượt mà hơn khi zoom kỹ thuật số, mang lại trải nghiệm chụp ảnh từ xa trọn vẹn.</p>
// <p>Camera trước của Galaxy S25 Ultra 512GB cũng không hề kém cạnh, với độ phân giải <strong>12MP</strong>, hỗ trợ quay video <strong>8K (7680 x 4320)@30fps)</strong>. Đây là công cụ hoàn hảo cho những ai thích selfie hoặc tham gia các cuộc gọi video call với chất lượng cao.</p>
// <h2>6. Thời lượng pin: Đủ sức đồng hành cả ngày dài</h2>
// <p>Galaxy S25 Ultra 512GB được trang bị viên pin dung lượng <strong>5000 mAh</strong>, tương tự như các thế hệ trước nhưng được tối ưu hóa tốt hơn nhờ chipset Snapdragon 8 Gen 4. Thiết bị có thể dễ dàng hoạt động cả ngày dài với các tác vụ nặng. Ngoài ra, công nghệ <strong>sạc nhanh 45W</strong> cho phép nạp đầy pin trong thời gian ngắn, giúp người dùng không bị gián đoạn khi sử dụng. Hỗ trợ sạc sạc ngược không dây, Galaxy S25 Ultra 512GB còn có thể trở thành nguồn sạc tiện lợi cho các thiết bị khác như tai nghe và đồng hồ thông minh.</p>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416316902_samsung_galaxy_s25_ultra_5g_512gb_6.png" alt=""></p>
// <h2>7. Mua Samsung Galaxy S25 Ultra 512GB chính hãng giá tốt tại Di Động Việt</h2>
// <p>Nếu bạn đang tìm kiếm chiếc <strong><a title="Samsung S25 Ultra" href="https://didongviet.vn/samsung-galaxy-s25-series.html#ultra" target="_blank" rel="noopener">Samsung S25 Ultra</a></strong> chính hãng với mức giá hấp dẫn cùng hàng loạt ưu đãi vượt trội, hãy ghé ngay hệ thống cửa hàng <span style="color: #e03e2d;"><strong>Di Động Việt</strong></span>. Tại đây, chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu với cam kết mang đến <strong>CHUYỂN GIAO GIÁ TRỊ VƯỢT TRỘI</strong>. Đặc biệt, sản phẩm được bán với mức giá cạnh tranh, thậm chí tốt hơn so với nhiều nơi khác, đi kèm các chương trình ưu đãi liên tục, giúp bạn sở hữu thiết bị với chi phí tối ưu nhất.</p>
// <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn-v2.didongviet.vn/files/default/2024/11/5/0/1733416329279_samsung_galaxy_s25_ultra_5g_512gb_7.png" alt=""></p>
// <p>Ngoài ra, bạn có thể truy cập website chính thức của Di Động Việt để khám phá thêm thông tin chi tiết, đánh giá sản phẩm hoặc liên hệ ngay qua <strong>hotline 1800.6018</strong> để nhận hỗ trợ tư vấn hoàn toàn miễn phí.</p>
// <p>&nbsp;</p>
// <p style="text-align: right;">Di Động Việt</p>
// <p style="text-align: right;">&nbsp;</p>
// <p>Tham khảo các sản phẩm tương tự:</p>
// <ul>
// <li><strong><a title="Samsung Galaxy S25 Ultra 5G 256GB Chính Hãng" href="https://didongviet.vn/dien-thoai/samsung-galaxy-s25-ultra-5g-256gb.html" target="_blank" rel="noopener">Samsung Galaxy S25 Ultra 5G 256GB Chính Hãng</a></strong></li>
// <li><strong><a title="Samsung Galaxy S25 Ultra 5G 1TB Chính Hãng" href="https://didongviet.vn/dien-thoai/samsung-galaxy-s25-ultra-5g-1tb.html" target="_blank" rel="noopener">Samsung Galaxy S25 Ultra 5G 1TB Chính Hãng</a></strong></li>
// </ul>
// <p>Tham khảo các sản phẩm liên quan:</p>
// <ul>
// <li><strong><a title="Samsung Galaxy S25 5G 512GB Chính Hãng" href="https://didongviet.vn/dien-thoai/samsung-galaxy-s25-5g-512gb.html" target="_blank" rel="noopener">Samsung Galaxy S25 5G 512GB Chính Hãng</a></strong></li>
// <li><strong><a title="Samsung Galaxy S25 Plus 5G 512GB Chính Hãng" href="https://didongviet.vn/dien-thoai/samsung-galaxy-s25-plus-5g-512gb.html" target="_blank" rel="noopener">Samsung Galaxy S25 Plus 5G 512GB Chính Hãng</a></strong></li>
// <li><strong><a title="Samsung Galaxy S24 Ultra 5G 512GB Chính Hãng" href="https://didongviet.vn/dien-thoai/samsung-galaxy-s24-ultra-5g-512gb.html" target="_blank" rel="noopener">Samsung Galaxy S24 Ultra 5G 512GB Chính Hãng</a></strong></li>
// </ul></div><button class="more-content flex items-center justify-center "><p class="text-ddv text-center font-bold text-16">Thu gọn</p></button></div>
//   `;
//   return (
//     <div className={styles.chitietsp}>
//       <div className={styles.maincontent}>
//       <div className={styles.gioithieu}>
//           <div className={styles.img}>
//             <div className={styles.slider}>
//                 <SimpleSlider/>
//             </div>
//           </div>
//           <div className={styles.price}>
//             <div className={styles.name}>Samsung Galaxy S25 Ultra 5G 512GB Chính Hãng</div>
//             <div className={styles.giaban}>
//               <p>30.490.000Đ
//                 <span className={styles.giacu}>37.490.000Đ</span>
//               </p>
//             </div>
//             <div className={styles.khuyenmai}></div>
//             <div className={styles.muangay}>
//             <div className={styles.nutmua}>
//               <a href="/giohang"> Mua ngay</a> 
//               <span className={styles.giaohang}>Giao hàng tận nơi hoặc nhận tại cửa hàng</span>
//             </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.mota}>Thông tin sản phẩm
//           <div dangerouslySetInnerHTML={{ __html: data }}></div>
//         </div>
//       </div>
//     </div>
//   );
// }