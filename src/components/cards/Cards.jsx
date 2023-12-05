import React from "react"
import ReactApexChart from "react-apexcharts"
import "./cards.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import Common from "../../common/Common"

const Cards = () => {
  const data = {
    series: [58],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["58"],
      colors: ["#ff5b5b"],
    },
  }
  const data1 = {
    series: [80],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["80"],
      colors: ["#E9B251"],
    },
  }
  const Progress = ({ done }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        ></div>
      </div>
    )
  }

  return (
    <>
      <section className='cards grid'>
        <div className='cardBox'>
          <Common title='Total Revenue' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>256</h1>
              <p>Revenue today</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Sales Analytics' />
          <div className='circle'>
            <div className='batch row'>
              <span>32%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>8451</h1>
              <p>Revenue today</p>
            </div>
          </div>
          <Progress done='70' />
        </div>
        <div className='cardBox'>
          <Common title='Total Revenue' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data1.options} series={data1.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>256</h1>
              <p>Revenue today</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Sales Analytics' />
          <div className='circle'>
            <div className='batch batch1 row'>
              <span>32%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>8451</h1>
              <p>Revenue today</p>
            </div>
          </div>
          <Progress done='70' />
        </div>
      </section>
    </>
  )
}

export default Cards
