import Chart from "react-apexcharts";
import { Props } from "framer-motion/types/types";
import { ApexOptions } from "apexcharts";



const donutData = [44, 55, 13, 33]

const labels: string[] = ['Apple', 'Mango', 'Orange', 'Watermelon']

const options: ApexOptions = {
    labels: labels,
    dataLabels: {
      enabled: true
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230
    }
  }

export const DonutsChart: React.FC<Props> = () => {

    return (
        <Chart
            options={options}
            height={400}
            series={donutData}
            type="donut"
        />
    )

}
