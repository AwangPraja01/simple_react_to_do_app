import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    } 

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.title.trim() !== "") {
            this.props.addTodo(this.state.title)
            this.setState({title: ''})
        } else {
            alert("Silahkan Masukkan Kegiatan")
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input onChange={this.onChange} value={this.state.title} type='text' name='title' placeholder='Tambahkan Kegiatan Anda' style={{flex: '10', padding: '10px'}}/>
                    <input type='submit' value='Tambah' className='btn' style={{flex: '1'}}/>
                </form>
            </div>
        )
    }
}

export default AddTodo
