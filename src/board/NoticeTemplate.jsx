<<<<<<< HEAD
import "../styles/board/NoticeTemplate.scss";

function NoticeTemplate({ children }) {
  return (
    <div className="NoticeTemplate">
      <div className="app-title">Notice List</div>
      <div className="content">{children}</div>
    </div>
=======
// styles/board/NoticeTemplate";
import { Link, useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function NoticeTemplate({ children }) {
  return (
    <>
      <Topbar />
      <div className="NoticeTemplate">
        <div className="app-title">공지사항</div>
        <div className="content">{children}</div>
      </div>

      <section className="Notice-Template-btn">
        <Link to={`/NoticePost`}>
          <button class="btn">공지사항 작성</button>
        </Link>

        <a href="javascript:history.back();">
          <button class="btn">돌아가기</button>
        </a>
      </section>
      <Footer />
    </>
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
  );
}

export default NoticeTemplate;
