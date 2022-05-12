import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Props } from "framer-motion/types/types";


export const MultiAxisCharts: React.FC<Props> = () => {

  const options: ApexOptions = {
    chart: {
      height: 350,
      events: {
        dataPointSelection: (event, chartContext, config) => { 
            console.log(config.w.globals.categoryLabels[config.dataPointIndex])
          }
        }
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
      enabledOnSeries: [0, 1]
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
        seriesName: "月貯金額",
        title: {
          text: "月貯金額"
        },
        labels: {
          formatter: (value: number) => {
            return value.toLocaleString() + "円";
          }
        }
      },
      {
        seriesName: "貯金額合計",
        opposite: true,
        title: {
          text: "貯金額合計"
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
      shared: true
    }
  }

  const state = {
    series: [
      {
        name: "月貯金額",
        type: "column",
        data: [50000, 50000, 60000, 50000, 50000, 50000]
      },
      {
        name: "貯金額合計",
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
