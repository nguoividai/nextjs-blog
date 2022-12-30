import Layout from "components/Layout";
import Head from "next/head";
import React, { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import postStyles from "../../styles/module/Post.module.css";
import Image from "next/image";
import categoryStyles from "styles/module/Category.module.css";

const PostDetail = () => {
  return (
    <>
      <Head>
        <title>Blog Detail</title>
        <meta name="description" content="Blog by Top Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={postStyles["post-container"]}>
          <div className={postStyles["post-content"]}>
            <div className={postStyles["post-title"]}>
              Doanh số đáng thất vọng của iPhone 14 Plus có thể sẽ khiến Apple
              phải thay đổi và giảm giá iPhone 15 Plus
            </div>

            <div>
              Các mẫu iPhone 14 và iPhone 14 Plus có doanh số không tốt như
              những gì Apple đã kỳ vọng, đặc biệt là phiên bản iPhone 14 Plus
              mới. Theo báo cáo từ các chuỗi cung ứng, Apple đã phải chuyển
              hướng nguồn lực sản xuất sang các phiên bản iPhone 14 Pro và 14
              Pro Max. Bên cạnh đó, một kế hoạch mới có thể sẽ được đưa ra để
              đảm bảo doanh số của các mẫu iPhone 15 tốt hơn. Apple đã không còn
              áp dụng chiến lược quen thuộc của mình, đó là trang bị chip xử lý
              mới nhất cho toàn bộ dòng iPhone mới ra mắt. Kết quả là iPhone 14
              6,1 inch và iPhone 14 Plus 6,7 inch vẫn chỉ được trang bị con chip
              xử lý cũ giống như iPhone 13. Vì vậy không có gì là lạ khi không
              có nhiều người tiêu dùng lựa chọn iPhone 14 và 14 Plus, đặc biệt
              là với mức giá tương tự năm ngoái.
            </div>

            <div className="mt-4 mb-4">
              <Image
                src="/assets/images/blog-img.jpg"
                alt="image-blog"
                width={500}
                height={350}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div>
              Do đó, Apple đang lên kế hoạch thực hiện một số thay đổi để giúp
              cải thiện doanh số của các mẫu iPhone 15 không phải Pro trong năm
              tới. Điều đầu tiên, Apple đang xem xét việc giảm bớt những khác
              biệt giữa phiên bản thường và phiên bản Pro. Báo cáo của
              PhoneArena cho biết rằng iPhone 15 và iPhone 15 Plus cũng sẽ có
              thiết kế Dynamic Island. Ngoài ra, iPhone 15 và 15 Plus sẽ được
              trang bị camera chính 48MP giống như iPhone 14 Pro. Thứ hai, Apple
              có thể sẽ điều chỉnh giá bán của phiên bản iPhone 15 Plus. Nguồn
              tin rò rỉ tiết lộ rằng iPhone 15 Plus sẽ có giá khởi điểm từ 899
              USD, còn iPhone 15 Pro sẽ có giá khởi điểm từ 999 USD. Cuối cùng,
              Apple sẽ tạo ra sự khác biệt lớn hơn giữa hai phiên bản iPhone 15
              Pro và 15 Pro Max. Theo đó, iPhone 15 Pro Max sẽ trở nên cao cấp
              hơn hẳn với khung bằng titan và camera ống kính tiềm vọng mới. Giá
              bán của phiên bản iPhone 15 Pro Max cũng sẽ cao hơn so với người
              tiền nhiệm của mình. Như vậy, iPhone 15 và 15 Plus sẽ được nâng
              cấp nhiều hơn, có ít sự khác biệt hơn so với phiên bản Pro. Tuy
              nhiên, phiên bản iPhone 15 Pro Max cao cấp nhất sẽ lại có nhiều
              khác biệt hơn hẳn so với phiên bản 15 Pro. Đây có thể là một chiến
              lược hoàn toàn mới của Apple, nhưng lại có phần nào khá giống với
              của Samsung.
            </div>
          </div>
        </div>

        <div className={postStyles["comment-container"]}>
          <div className={categoryStyles["heading"]}>Để lại ý kiến</div>
          <div className="mt-3">
            <textarea
              className="form-control"
              aria-label="Comment"
              placeholder="Nhập bình luận"
              rows={5}
            ></textarea>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                aria-describedby="email"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Tên hiển thị"
                aria-label="name"
                aria-describedby="name"
              />
            </div>
          </div>
          <div className="mt-3 text-end">
            <button type="button" className="btn btn-primary">
              <i className="icofont-send-mail"></i> Gửi
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

PostDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostDetail;
