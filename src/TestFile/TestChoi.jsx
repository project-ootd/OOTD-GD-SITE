import React from "react";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
import "../styles/Test/TestChoi.scss";
import Buybtn from "../btn/Buybtn";

import { Link } from "react-router-dom";

const TestChoi = (args) => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.24.0/dist/full.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
        rel="stylesheet"
        type="text/css"
      />

      <div className="overflow-x-auto">
        <Table
          {...args}
          className="rounded-box"
          style={{ margin: "10vh auto" }}
        >
          <Table.Head>
            <Checkbox />
            <span>상품명</span>
            <span>수량</span>
            <span>가격</span>
            <span />
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="https://image.msscdn.net/images/goods_img/20220601/2594411/2594411_1_500.jpg?t=20220601075542"
                  width={100}
                />
                <div>
                  <div className="font-bold">
                    쿨맥스 브이넥 반팔 니트 [블랙]
                  </div>
                  <div className="text-sm opacity-50">
                    Coolmax V-neck short-sleeve knit [Black]
                  </div>
                </div>
              </div>
              <div>
                1
                <br />
                {/* <Badge color="ghost" size="sm"></Badge> */}
              </div>
              <div>53,000</div>
              <Button color="ghost" size="md" style={{ color: "red" }}>
                삭제
              </Button>
            </Table.Row>
          </Table.Body>

          <Table.Body>
            <Table.Row>
              <div></div>

              <div className="flex items-center space-x-3 truncate">
                <Mask />
                <div>
                  <div className="font-bold"></div>
                  <div className="text-sm opacity-50"></div>
                </div>
              </div>
              <div style={{ textAlign: "center", fontWeight: "bold" }}>
                총 수량<br></br>
                <Badge color="ghost" size="lg">
                  1
                </Badge>
              </div>
              <div style={{ textAlign: "center", fontWeight: "bold" }}>
                총 가격<br></br>
                <Badge
                  color="ghost"
                  size="lg"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  53,000
                </Badge>
              </div>
              <Button color="ghost" size="xs" style={{ color: "red" }}></Button>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span></span>
            <Button {...args}>돌아가기</Button>
            <Button {...args} color="secondary">
              결제하기
            </Button>
          </Table.Footer>
        </Table>
      </div>
      <div class="mockup-window border bg-base-300">
        <div class="flex justify-center px-4 py-16 bg-base-200">
          <Buybtn />
        </div>
      </div>
    </>
  );
};

export default TestChoi;
