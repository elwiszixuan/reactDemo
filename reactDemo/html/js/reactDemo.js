// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../../bootstrap-4.0.0-dist/css/bootstrap.css';
// import '../css/general.css'


//单个kpi指标项自定义组件
function Card(props) {
    return (

        <div className="col-xs-4 align-self-start ">
            <div className="card bg-secondary text-light">
                <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <span><i className="fa fa-bar-chart fa-lg" aria-hidden="true"></i></span>
                    <h4 className="card-text">完成数值 {props.result}</h4>
                </div>
            </div>
        </div>

    );
}

//指标项展示框 --动态读取后台考核项目
class CardsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,

        }
    }


    render() {



        let kpiArray = convertArray(testArray).slice();
        if (this.state.isExpand) {
            return (
                <div>
                    {
                        kpiArray.map(row => {
                            return <div className="row justify-content-between" id="indexRow" style={{ background: 'aquamarine' }}>
                                {row.map(item => {
                                    return <Card title={item.title} result={item.result}></Card>
                                })}

                            </div>
                        })
                    }
                    <TabDropDown onClick={() => this.handleTabDropDown()} />
                </div>
            )
        }
        else {
            let kpiTopRow = kpiArray.slice(0, 1)


            return (
                <div>
                    {
                        kpiTopRow.map(row => {
                            return <div className="row justify-content-between" id="indexRow" style={{ background: 'aquamarine' }}>
                                {row.map(item => {
                                    return <Card title={item.title} result={item.result}></Card>
                                })}

                            </div>
                        })
                    }

                    <TabDropDown onClick={() => this.handleTabDropDown()} />
                </div>)




        }

    }

    handleTabDropDown() {
        this.setState({
            isExpand: !this.state.isExpand,
        })

    }

}

//下拉自定义组件
function TabDropDown(props) {
    return (<p onClick={props.onClick}>-----------------↓-----------------</p>)

}

//echart 组件
class EchartComponent extends React.Component{

}
//环比
function LinkRelativeRatio(props){
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('main'));
                    
     // 指定图表的配置项和数据
     var option = {
         // title: {
         //     text: 'ECharts 入门示例'
         // },
         tooltip: {},
         legend: {
             data:['销量']
         },
         xAxis: {
             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
         },
         yAxis: {},
         series: [{
             name: '销量',
             type: 'bar',
             data: [5, 20, 36, 10, 10, 20]
         }]
     };

     // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    render(){
        return(
            <div></div>
        );
    }
    
}



//=================================================================
ReactDOM.render(
    <CardsTab />,
    document.getElementById('testR'),
    // <LinkRelativeRatio/>,
    // document.getElementById('main')
);

//调试用数组
function testArray() {
    let kpiArray = [];
    for (let i = 0; i < 16; i++) {
        let kpi = {
            title: i + "",
            result: i
        }
        kpiArray[i] = kpi
    }

    return kpiArray;
}

//将传入的数组，分组切片，分发到指标展示框的每一行
function convertArray(arrayFromBack) {

    var list = [];
    let receivedArray = arrayFromBack().slice();

    var arrayLength = receivedArray.length;
    const numberInARow = 5;
    var numberInLastRow = arrayLength % numberInARow;
    var rows = (arrayLength - numberInLastRow) / numberInARow;

    for (var i = 0; i < arrayLength; i += numberInARow) {
        list.push(receivedArray.slice(i, i + numberInARow))
    }


    return list
}