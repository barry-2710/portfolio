import React, { Component } from 'react'


class Form extends Component {
    state = {
        firstName: '',
        secondName: ''
      }
      handelChange = (e) => {
          this.setState({
              [e.target.id]: e.target.value
          })
      }
      handelSubmit = (e) => {
          e.preventDefault()
          console.log(this.state)
      }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handelSubmit} className="col s12 center">
                        <br/>
                        <div className="input-field col s12">
                            <input type="text" className="validate" placeholder="First Name" id="firstName" onChange={this.handelChange}/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" className="validate" placeholder="Second Name" id="secondName" onChange={this.handelChange}/>
                            <label htmlFor="first_name">Second Name</label>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">submit
                        <i className="material-icons right">send</i></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;