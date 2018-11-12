// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../../bootstrap-4.0.0-dist/css/bootstrap.css';
// import '../css/general.css'

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

class CardsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        }
    }


    render() {
        let kpiArray = convertArray(testArray).slice();
        return (
            <div>
                {
                    kpiArray.map(row => {
                        return <div className="row justify-content-between" id="indexRow" style={{ background: 'aquamarine' }}>
                            {row.map(item => {
                                return <Card title = {item.title} result={item.result}></Card>
                            }) }
                        </div>
                    })
                }   
            </div>
        )
    }
}




//=================================================================
ReactDOM.render(
    <CardsTab />,
    document.getElementById('testR')
);


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

function convertArray(arrayFromBack){
    
    var list = [];
    let receivedArray = arrayFromBack().slice();

    var arrayLength = receivedArray.length;
    const numberInARow = 5;
    var numberInLastRow = arrayLength%numberInARow;
    var rows = (arrayLength-numberInLastRow) / numberInARow;

    for(var i=0;i<arrayLength;i+=numberInARow){
        list.push(receivedArray.slice(i,i+numberInARow))
    }


    return list
}