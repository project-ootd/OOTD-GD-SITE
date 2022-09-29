import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MainNotice = ({ contentLimitItem }) => {
  return (
    <Link to={`/NoticeContent/${contentLimitItem.id}`}>
      <li>
        {contentLimitItem.id}.&nbsp;{contentLimitItem.title}
      </li>
    </Link>
  );
};

export default MainNotice;
