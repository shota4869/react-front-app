import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Props } from "framer-motion/types/types";


export const MultiAxisCharts: React.FC<Props> = () => {

  const options: ApexOptions = {
    chart: {
      height: 350
    },
    colors: ["#318fb5", "#b0cac7", "#005086", "#f7d6bf", "#001244"],
    stroke: {
      width: [0, 4]
    },
    title: {
      text: "貯金額推移図"
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1, 2]
    },
    labels: [
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月"
    ],
    xaxis: {
      type: "category"
    },
    yaxis: [
      {
        seriesName: "貯金額合計",
        title: {
          text: "貯金額合計"
        },
        labels: {
          formatter: (value: number) => {
            return value.toLocaleString() + "円";
          }
        }
      },
      {
        seriesName: "総数", // スケール合わせるためにわざと総数にしている
        show: false
      },
      {
        seriesName: "月合計",
        opposite: true,
        title: {
          text: "月合計"
        },
        labels: {
          formatter: (value: number) => {
            return value.toLocaleString() + "円";
          }
        }
      }
    ],
    legend: {
      position: "right",
      width: 128
    },
    tooltip: {
      shared: false
    }
  }

  const state = {
    series: [
      {
        name: "総数",
        type: "column",
        data: [4857, 7289, 8108, 7899, 11140, 13559]
      },
      {
        name: "hoge数",
        type: "column",
        data: [680, 1108, 1200, 1098, 967, 800]
      },
  
      {
        name: "hoge率",
        type: "line",
        data: [900000, 1020000, 1400000, 1320000, 1350000, 1500000]
      }
    ],
    options
  };  

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="line"
      height={350}
    />
  );
};
