import React, { useEffect, useState } from "react";
import "../styles/subscss/Woman.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const Woman = () => {
  const [showing, setShowing] = useState(false);

  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      console.log(data.data);
      setPrd(data.data);
      setShowing(true);
    };
    getData();
  }, []);

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
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20200701/1503346/1503346_1_500.jpg?t=20220401110908"
                  alt=""
                />

                <div className="ico-view">
                  <Link to="/SubDetailMan">
                    <i className="fas fa-search" />
                  </Link>
                </div>
              </div>
              <div className="prod-name">
                <Link to="/WSBP"></Link>;
              </div>
              {/* {console.log(prd)} */}
              {/* {prd.map((prdPrice) => {
                return <div className="prod-price"> {prd[2].prdPrice}</div>;
              })} */}
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220329/2453555/2453555_1_500.jpg?t=20220331173218"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name"> TSHIRT FLOWERMARDI_OATMEAL BLACK</div>
              <div className="prod-price">40,500</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220329/2453502/2453502_1_500.jpg?t=20220405102956"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">TSHIRT UNIV_OATMEAL BLACK</div>
              <div className="prod-price">40,500</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/prd_img/20220329/2453556/detail_2453556_3_500.jpg"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name"> TSHIRT FLOWERMARDI_IVORY NAVY</div>
              <div className="prod-price">37,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220329/2453552/2453552_1_500.jpg?t=20220331173345"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name"> TSHIRT FLOWERMARDI_BLACK CREAM</div>
              <div className="prod-price">37,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220420/2503701/2503701_2_500.jpg?t=20220426143913"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">FLARE SKIRT BANDING BACK_BEIGE</div>
              <div className="prod-price">104,000</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220211/2354451/2354451_2_500.jpg?t=20220426145355"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">WAFFLE SHORTS_GREEN WHITE</div>
              <div className="prod-price">46,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220211/2354455/2354455_2_500.jpg?t=20220426145321"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">WAFFLE SHORTS_BLUE WHITE</div>
              <div className="prod-price">46,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220211/2354445/2354445_2_500.jpg?t=20220426144329"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">
                SWEAT SHORTS MARCHE EMBLEM_NAVY CREAM
              </div>
              <div className="prod-price">53,100</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220420/2503745/2503745_2_500.jpg?t=20220426143633"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">CABLE CROPPED TOP MRCD_WHITE BLUE</div>
              <div className="prod-price">67,500</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588169/2588169_2_500.jpg?t=20220527163630"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name"> SU TWINKLE CROP TEE(BLACK)</div>
              <div className="prod-price">22,750</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2587926/2587926_2_500.jpg?t=20220527154906"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">SU CHAIN OFF SHOULDER(WHITE)</div>
              <div className="prod-price">29,400</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2587896/2587896_1_500.jpg?t=20220527154737"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">SU CHAIN OFF SHOULDER(BLACK)</div>
              <div className="prod-price">31,850</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588100/2588100_2_500.jpg?t=20220527161848"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">SU LOGO BOX TEE(WHITE)</div>
              <div className="prod-price">23,400</div>
            </li>
            <li className="cell">
              <Link to="/Sub_detail_man">
                <div className="img-box">
                  <img
                    src="https://image.msscdn.net/images/goods_img/20220527/2588114/2588114_2_500.jpg?t=20220527162558"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
              </Link>

              <div className="prod-name">SU SHIRRING TEE(PINK)</div>
              <div className="prod-price">21,600</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588111/2588111_2_500.jpg?t=20220527162419"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name"> SU REFLECT TEE(BLACK)</div>
              <div className="prod-price">22,100</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588174/2588174_2_500.jpg?t=20220527163722"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">SU TWINKLE CROP TEE(WHITE)</div>
              <div className="prod-price">22,750</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588038/2588038_2_500.jpg?t=20220527161437"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>

              <div className="prod-name"> SU FACE TEE(WHITE)</div>
              <div className="prod-price">27,300</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588101/2588101_2_500.jpg?t=20220527161923"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">SU LOGO MESH TOP(BEIGE)</div>
              <div className="prod-price">25,200</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220527/2588120/2588120_2_500.jpg?t=20220527162743"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name"> SU SPRAY TEE(WHITE)</div>
              <div className="prod-price">29,400</div>
              <div className="free-del">
                <span />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Woman;
