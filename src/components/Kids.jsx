import React from "react";
import { Link } from "react-router-dom";
import "../styles/subscss/Kids.scss";
const Kids = ({ prd }) => {
  return (
    <div>
      <section>
        <div className="sub-menu">
          <h1>KIDS</h1>
        </div>
        <div className="main-pic">
          <img
            src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fimg.theqoo.net%2Fimg%2FJGmXb.jpg&type=sc960_832"
            alt=""
          />
        </div>
        <div className="list-box-1 con">
          <ul className="row">
            <li className="cell">
              <Link to="/KSBP" state={{ data: "K001" }}>
                <div className="img-box">
                  <img src={prd.length > 0 && prd[0].prdImg} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[0].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[0].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[1].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0020020004543.jpg?1660036965"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {" "}
                  {prd.length > 0 && prd[1].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[1].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>

            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[2].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0020010031963.jpg?1659673460"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[2].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[2].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[3].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0020010031863.gif?1658821663"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[3].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[3].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[4].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0040020008053.jpg?1658196323"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[4].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[4].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[5].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0010020001453.gif?1658976887"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[5].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[5].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[6].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0020010031873.jpg?1658822079"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[6].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[6].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[7].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0020010031733.jpg?1657851482"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[7].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[7].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[8].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0090010013983.jpg?1661231705"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[8].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[8].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[9].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0090010013973.jpg?1661231113"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[9].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[9].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[10].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010005393.jpg?1661229779"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[10].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[10].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[11].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010004973.jpg?1656316446"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[11].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[11].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[12].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010004943.jpg?1656294505"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[12].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[12].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[13].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010004873.jpg?1656293202"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[13].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[13].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[14].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010005193.jpg?1656292853"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>

                <div className="prod-name">
                  {prd.length > 0 && prd[14].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[14].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[15].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010004963.jpg?1656292572"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[15].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[15].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[16].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010005043.jpg?1656291917"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[16].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[16].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[17].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010005033.jpg?1656292240"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>

                <div className="prod-name">
                  {prd.length > 0 && prd[17].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[17].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[18].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010005163.jpg?1656294715"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[18].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[18].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/KSBP" state={prd.length > 0 && prd[19].prdid}>
                <div className="img-box">
                  <img
                    src="https://jkids.co.kr/shopimages/verysweet/0140010005003.jpg?1656293071"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[19].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[19].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Kids;
