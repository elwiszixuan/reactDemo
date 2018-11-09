import React from 'react';
import ReactDOM from 'react-dom';
import '../../bootstrap-4.0.0-dist/css/bootstrap.css';
import '../css/general.css'

function Cube(props) {
    return (
        <div class="col-xs-4 align-self-start ">
            <div class="card bg-secondary text-light">
                <div class="card-body">
                    <h6 class="card-title">props.title</h6>
                    <span><i class="fa fa-bar-chart fa-lg" aria-hidden="true"></i></span>
                    <h4 class="card-text">完成数值 props.index</h4>
                </div>
            </div>
        </div>
    );
}

class CubeTab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isExpand:false,
        }
    }

    renderCube(i){
        return(
            <Cube
                title = {'考核项目'+i}
                index = {i}
            />
        );
    }
}