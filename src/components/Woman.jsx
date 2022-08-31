import React from "react";
import "../styles/subscss/Woman.scss";
import { Link } from "react-router-dom";
const Woman = ({ prd }) => {
  // console.log({ prd });

  return (
    <>
      <section>
        <div className="sub-menu">
          <h1>Woman</h1>
        </div>
        <div className="main-pic">
          <img
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzExMTRfMTQ0%2FMDAxNTEwNjI4MzI3MjQz.qj1sxYqHpSI70QFo4CDLEtZqHljHf-nE_P4XA5qbqPsg.m2AQGcQkwVpesYetoNvyN3WzNlA2hmkxJMlOGts6jQ4g.JPEG.banillamodels%2F2015091182355.jpg&type=sc960_832"
            alt=""
          />
        </div>
        <div className="list-box-1 con">
          <ul className="row">
            <li className="cell">
              <Link to="/WSBP" state={{ data: "W001" }}>
                <div className="img-box">
                  {console.log(prd.length)}
                  <img
                    src={
                      prd.length > 0
                        ? prd[0].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />

                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {/* <Link to={{ pathname: "/WSBP", state: { data: "test1" } }}> */}
                  {/* <Link to={"/WSBP"} state={{ data: prd[0].prdName }}> */}
                  {prd.length > 0 && prd[0].prdName}
                </div>
                {/* {console.log(prd)} */}
                {/* {prd.map((prdPrice) => {
                return <div className="prod-price"> {prd[2].prdPrice}</div>
              })} */}

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
              <Link to="/WSBP" state={{ data: "W002" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[1].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
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
              <Link to="/WSBP" state={{ data: "W003" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[2].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W004" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[3].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W005" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[4].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[4].prdName}
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
              <Link to="/WSBP" state={{ data: "W006" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[5].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W007" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[6].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[6].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[6].prdPrice
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
              <Link to="/WSBP" state={{ data: "W008" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[7].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[7].prdName}
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
              <Link to="/WSBP" state={{ data: "W009" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[8].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W010" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[9].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[9].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[9].prdPrice
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
              <Link to="/WSBP" state={{ data: "W011" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[10].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W012" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[11].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W013" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[12].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[12].prdName}
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
              <Link to="/WSBP" state={{ data: "W014" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[13].prdimg
                        : console.log("이미지 없음")
                    }
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[13].prdName}
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
              <Link to="/WSBP" state={{ data: "W015" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[14].prdimg
                        : console.log("이미지 없음")
                    }
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
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/WSBP" state={{ data: "W016" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[15].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W017" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[16].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W018" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[17].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W019" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[18].prdimg
                        : console.log("이미지 없음")
                    }
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
              <Link to="/WSBP" state={{ data: "W020" }}>
                <div className="img-box">
                  <img
                    src={
                      prd.length > 0
                        ? prd[19].prdimg
                        : console.log("이미지 없음")
                    }
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
    </>
  );
};
export default Woman;
