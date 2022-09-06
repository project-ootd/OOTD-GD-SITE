import "../styles/board/NoticeTemplate.scss";
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
      <Link to={`/NoticePost`}>
        <button class="Notice-Template-btn btn bg-base-300">
          공지사항 작성
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default NoticeTemplate;
