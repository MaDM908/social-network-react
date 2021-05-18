import React from 'react';




class ProfileStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: !this.props.status ? "No info" : this.props.status,
            editMode: false
        };
    }
    editModeEnable = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    editModeDisable = (e) => {
        this.props.updateStatus(e.target.value)
        this.setState(
            {
                editMode: false
            }
        )
    }
    changeHandler = (e) => {
        this.setState(
            {
                status: e.target.value
            }
        )
    }
    //Что-то не понятное творится!
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })   
        }
    }
    render(){
    return <div>
        {this.state.editMode
        ? <div><input onBlur={this.editModeDisable} onChange={this.changeHandler} 
        autoFocus={true} type="Status" value={this.state.status}/></div>
        : <div><span onDoubleClick={this.editModeEnable}>{this.state.status}</span></div>}
    </div>;
    }
};

export default ProfileStatus;