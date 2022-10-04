import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MainNotice = ({ contentLimitItem }) => {
  return (
    <li>
      <Link to={`/NoticeContent/${contentLimitItem.id}`}>
        {contentLimitItem.id}.&nbsp;{contentLimitItem.title}
      </Link>
    </li>
  );
};

export default MainNotice;
