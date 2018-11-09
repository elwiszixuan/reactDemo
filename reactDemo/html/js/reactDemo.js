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



class CardsRow extends React.Component{
    
    testArray(){
        let kpiArray = [];
        for(let i =0;i<16;i++){
            let kpi ={
                title:i+"",
                result:i
            }
            kpiArray[i]=kpi
        }
       
        return (kpiArray);
    }


    render(){
        
        let kpiArray = this.testArray();
        return(
            
        );
    }

}


class CardsTab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isExpand:false,
        }
    }

    renderCube(title,result){
        return(
            <Card
                title = {title}
                result = {result}
            />
        );
    }



    render(){
        return(
            <div>
                <div className="row justify-content-between" style={{background:'aquamarine'}}>
                    {this.renderCube('考核项目',11)}
                    {this.renderCube('考核项目',22)}
                    {this.renderCube('考核项目',33)}
                    {this.renderCube('考核项目',44)}
                    {this.renderCube('考核项目',55)}
                </div>
                <div className="row justify-content-between" style={{background:'aquamarine'}}>
                    {this.renderCube('考核项目',66)}
                    {this.renderCube('考核项目',77)}
                    {this.renderCube('考核项目',88)}
                    {this.renderCube('考核项目',99)}
                    {this.renderCube('考核项目',1010)}
                </div>
                <div className="row justify-content-between" style={{background:'aquamarine'}}>
                    {this.renderCube('考核项目',1111)}
                    {this.renderCube('考核项目',1212)}
                    {this.renderCube('考核项目',1313)}
                    {this.renderCube('考核项目',1414)}
                    {this.renderCube('考核项目',1515)}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <CardsTab />,
    document.getElementById('testR')
);