import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

import data from './../../../data.json';

const labelListCustom = (props: any) => {
  const { x, y, width, value } = props;

  return (
    <g>
      <rect
        width={width * 1.1}
        height="25px"
        x={x - (width * 1.1 - width) / 2}
        y={y - 30}
        rx={4}
        fill="#382314"
      />
      <text
        x={x + width / 2}
        y={y - 15}
        fill="#fff"
        fontSize={12}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`$${value}`}
      </text>
    </g>
  );
};

export default function BalanceWidgetGraph() {
  const [focusBar, setFocusBar] = useState<number | undefined>(undefined);
  const higherValue = Math.max.apply(
    Math,
    data.map(({ day, amount }) => amount)
  );

  return (
    <ResponsiveContainer minHeight={220}>
      <BarChart
        data={data}
        onMouseMove={(state) =>
          state.isTooltipActive
            ? setFocusBar(state.activeTooltipIndex)
            : setFocusBar(undefined)
        }
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <Tooltip content={<></>} cursor={false} />
        <Bar dataKey="amount">
          {data.map((entry, index) => {
            return (
              <>
                <Cell
                  key={`cell-${index}`}
                  className={
                    focusBar === index
                      ? higherValue === entry.amount
                        ? 'fill-primary-cyan/80'
                        : 'fill-primary-soft-red'
                      : higherValue !== entry.amount
                      ? 'fill-orange'
                      : 'fill-primary-cyan'
                  }
                />
                {focusBar === index ? (
                  <LabelList
                    key={index}
                    dataKey="amount"
                    content={labelListCustom}
                  />
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
