import "../styles/board/NoticeTemplate.scss";

function NoticeTemplate({ children }) {
  return (
    <div className="NoticeTemplate">
      <div className="app-title">Notice List</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default NoticeTemplate;
