import React, { useEffect, useState } from "react";
import "../styles/subscss/GPLayout.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const GPLayout = () => {
  return (
    <>
      <section>
        <div className="sub-menu">
          <h1>Woman</h1>
          <ul className="sub-menu2">
            <li>
              <a href="#">Summer</a>
            </li>
            <li>
              <a href="#">Shirts</a>
            </li>
            <li>
              <a href="#">Pants</a>
            </li>
          </ul>
          <ul className="sub-menu3">
            <li>
              <a href="#">Winter</a>
            </li>
            <li>
              <a href="#">Shirts</a>
            </li>
            <li>
              <a href="#">Pants</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="main-pic">
          <img
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzExMTRfMTQ0%2FMDAxNTEwNjI4MzI3MjQz.qj1sxYqHpSI70QFo4CDLEtZqHljHf-nE_P4XA5qbqPsg.m2AQGcQkwVpesYetoNvyN3WzNlA2hmkxJMlOGts6jQ4g.JPEG.banillamodels%2F2015091182355.jpg&type=sc960_832"
            alt=""
          />
        </div>
        <div className="list-box-1 con">
          <ul className="row">
            <li className="cell">
              <Link to="/Sub_detail">
                <div className="img-box">
                  <img
                    src="https://image.msscdn.net/images/goods_img/20210516/1952975/1952975_1_500.jpg?t=20220628162328"
                    alt=""
                  />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
              </Link>

              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220502/2534773/2534773_1_500.jpg?t=2022062817204"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20200527/1465438/1465438_1_500.jpg?t=20220628153104"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20200527/1465444/1465444_1_500.jpg?t=20220628153105"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210516/1952968/1952968_1_500.jpg?t=20220628162328"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210901/2103995/2103995_1_500.jpg?t=20220628163922"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220502/2534765/2534765_1_500.jpg?t=20220628172047"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220502/2534805/2534805_1_500.jpg?t=20220628172047"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220502/2534813/2534813_1_500.jpg?t=20220628172047"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210901/2103994/2103994_1_500.jpg?t=20220628163922"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220223/2379342/2379342_1_500.jpg?t=20220628170341"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20200609/1477410/1477410_1_500.jpg?t=20200609082327"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210530/1974944/1974944_1_500.jpg?t=20220628162530"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210516/1952947/1952947_1_500.jpg?t=20220628162328"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220502/2534559/2534559_1_500.jpg?t=20220628172047"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220420/2502829/2502829_1_500.jpg?t=20220504003130"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210425/1919155/1919155_1_500.jpg?t=20210425212118"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20210823/2080154/2080154_1_500.jpg?t=20210823105045"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>

              <div className="prod-name">단PS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220420/2502822/2502822_1_500.jpg?t=20220504003202"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <div className="img-box">
                <img
                  src="https://image.msscdn.net/images/goods_img/20220525/2581510/2581510_1_500.jpg?t=20220525143535"
                  alt=""
                />
                <div className="ico-view">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="prod-name">단가라 OPS</div>
              <div className="prod-price">19,800</div>
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
export default GPLayout;
