import React from "react";
import { useCallback } from "react";

const TestBong = () => {
  const [order, setOrder] = useCallback((userId) => {
    setOrder((order) => {
      const find = order.find(one.userId === userId);
      if (find === undefined) {
        return [
          ...order,
          {
            userId: userId,
          },
        ];
      } else {
        return order.map((one) => {
          if (one.userId === userId) {
            return {
              userId,
            };
          } else {
            return one;
          }
        });
      }
    });
  }, []);

  return <div></div>;
};

export default TestBong;
