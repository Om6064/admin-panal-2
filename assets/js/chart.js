var options = {
    chart: {
        height: 380,
        width: "100%",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [1, 2, 3],
        curve: "smooth",
        lineCap: "round"
    },
    plotOptions: {
        bar: {
            endingShape: "rounded",
            columnWidth: "30%"
        }
    },
    colors: ["#3454d1", "#a2acc7", "#E1E3EA"],
    series: [{
        name: "Payment Rejected",
        type: "bar",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21]
    }, {
        name: "Payment Completed",
        type: "line",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 41]
    }, {
        name: "Awaiting Payment",
        type: "bar",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 56]
    }],
    fill: {
        opacity: [.85, .25, 1, 1],
        gradient: {
            inverseColors: !1,
            shade: "light",
            type: "vertical",
            opacityFrom: .5,
            opacityTo: .1,
            stops: [0, 100, 100, 100]
        }
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            style: {
                fontSize: "10px",
                colors: "#A0ACBB"
            }
        }
    },
    yaxis: {
        labels: {
            formatter: function (e) {
                return +e + "K"
            },
            offsetX: -5,
            offsetY: 0,
            style: {
                color: "#A0ACBB"
            }
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: !1
            }
        },
        yaxis: {
            lines: {
                show: !1
            }
        }
    },
    dataLabels: {
        enabled: !1
    },
    tooltip: {
        y: {
            formatter: function (e) {
                return +e + "K"
            }
        },
        style: {
            fontSize: "12px",
            fontFamily: "Inter"
        }
    },
    legend: {
        show: !1,
        labels: {
            fontSize: "12px",
            colors: "#A0ACBB"
        },
        fontSize: "12px",
        fontFamily: "Inter"
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

var options2 ={
    chart: {
        type: "area",
        height: 150,
        sparkline: {
            enabled: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    colors: ["#93a9ff"],
    fill: {
        type: "solid",
        opacity: .4
    },
    stroke: {
        curve: "smooth",
        width: 3
    },
    series: [{
        name: "Total Sales",
        data: [20, 10, 18, 12, 25, 10, 20]
    }],
    yaxis: {
        min: 0,
        max: 30
    },
    tooltip: {
        theme: "dark",
        y: {
            formatter: function(e) {
                return +e + "K"
            }
        },
        style: {
            fontSize: "12px",
            fontFamily: "Inter"
        }
    }
}

var chart = new ApexCharts(document.querySelector("#chart2"), options2);

chart.render();

var options3={
    series: [{
        name: "Task Completed",
        data: [44, 55, 41, 60, 52, 66, 51]
    }],
    chart: {
        type: "area",
        height: 100,
        toolbar: {
            show: !1
        },
        sparkline: {
            enabled: !0
        }
    },
    stroke: {
        width: 2,
        curve: "smooth"
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: .2,
            opacityTo: .75,
            stops: [0, 90, 100]
        }
    },
    colors: ["#3454d1"],
    grid: {
        show: !1
    },
    legend: {
        show: !1
    },
    dataLabels: {
        enabled: !1
    },
    xaxis: {
        categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        }
    },
    tooltip: {
        y: {
            formatter: function(e) {
                return +e + "Tasks"
            }
        },
        style: {
            fontSize: "12px",
            colors: "#A0ACBB",
            fontFamily: "Inter"
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart3"), options3);

chart.render();

var options4={
    series: [{
        name: "Task Completed",
        data: [44, 55, 41, 60, 52, 66, 51]
    }],
    chart: {
        type: "area",
        height: 100,
        toolbar: {
            show: !1
        },
        sparkline: {
            enabled: !0
        }
    },
    stroke: {
        width: 2,
        curve: "smooth"
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: .2,
            opacityTo: .75,
            stops: [0, 90, 100]
        }
    },
    colors: ["#17c666"],
    grid: {
        show: !1
    },
    legend: {
        show: !1
    },
    dataLabels: {
        enabled: !1
    },
    xaxis: {
        categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        }
    },
    tooltip: {
        y: {
            formatter: function(e) {
                return +e + "Tasks"
            }
        },
        style: {
            fontSize: "12px",
            colors: "#A0ACBB",
            fontFamily: "Inter"
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart4"), options4);

chart.render();

var options5={
    series: [{
        name: "Task Completed",
        data: [44, 55, 41, 60, 52, 66, 51]
    }],
    chart: {
        type: "area",
        height: 100,
        toolbar: {
            show: !1
        },
        sparkline: {
            enabled: !0
        }
    },
    stroke: {
        width: 2,
        curve: "smooth"
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: .2,
            opacityTo: .75,
            stops: [0, 90, 100]
        }
    },
    colors: ["#ea4d4d"],
    grid: {
        show: !1
    },
    legend: {
        show: !1
    },
    dataLabels: {
        enabled: !1
    },
    xaxis: {
        categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        }
    },
    tooltip: {
        y: {
            formatter: function(e) {
                return +e + "Tasks"
            }
        },
        style: {
            fontSize: "12px",
            colors: "#A0ACBB",
            fontFamily: "Inter"
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart5"), options5);

chart.render();

var options6={
    chart: {
        width: 328,
        type: "donut"
    },
    dataLabels: {
        enabled: !1
    },
    series: [20, 15, 10, 18, 10, 15, 16, 14, 10],
    labels: ["New", "Contacted", "Qualified", "Working", "Customer", "Proposal", "Leads", "Prograss", "Others"],
    colors: ["#3454d1", "#1565c0", "#1976d2", "#1e88e5", "#2196f3", "#42a5f5", "#64b5f6", "#90caf9", "#aad6fa"],
    stroke: {
        width: 0,
        lineCap: "round"
    },
    legend: {
        show: !1,
        position: "bottom",
        fontFamily: "Inter",
        fontWeight: 500,
        labels: {
            colors: "#A0ACBB",
            fontFamily: "Inter"
        },
        markers: {
            width: 10,
            height: 10
        },
        itemMargin: {
            horizontal: 20,
            vertical: 5
        }
    },
    plotOptions: {
        pie: {
            donut: {
                size: "85%",
                labels: {
                    show: !1,
                    name: {
                        show: !1,
                        fontSize: "16px",
                        colors: "#A0ACBB",
                        fontFamily: "Inter"
                    },
                    value: {
                        show: !1,
                        fontSize: "30px",
                        fontFamily: "Inter",
                        color: "#A0ACBB",
                        formatter: function(e) {
                            return e
                        }
                    }
                }
            }
        }
    },
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                width: 280
            },
            legend: {
                show: !1
            }
        }
    }],
    tooltip: {
        y: {
            formatter: function(e) {
                return +e + "K"
            }
        },
        style: {
            colors: "#A0ACBB",
            fontFamily: "Inter"
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart6"), options6);

chart.render();

