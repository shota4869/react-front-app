import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Props } from "framer-motion/types/types";
import { useNavigate } from "react-router-dom";


export const MultiAxisCharts: React.FC<Props> = () => {

  const navigate = useNavigate();

  const options: ApexOptions = {
    chart: {
      height: 350,
      events: {
        dataPointSelection: (event:any, chartContext: any, config :any) => {
          console.log(config.w.globals.categoryLabels[config.dataPointIndex])
          console.log(event)
          const yearMonth = config.w.globals.categoryLabels[config.dataPointIndex]
          console.log({ state: { yearMonth1: yearMonth}})

          const object = { state: { yearMonth1: yearMonth}}
          
          if (!object) return
          navigate("/home/balance-of-payment-list")

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
      "202205",
      "202206",
      "202207",
      "202208",
      "202209",
      "202210"
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
