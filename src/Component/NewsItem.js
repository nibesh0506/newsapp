import React, {Component} from 'react'
import {Tilt} from "react-tilt";

export class NewsItem extends Component {
    render() {
        const defaultOptions = {
            reverse: true,
            max: 20,
            perspective: 1000,
            scale: 1,
            speed: 1000,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)"
        }
        let {title, description, urlToImage, url} = this.props
        return (<div>
            <Tilt options={defaultOptions}>
                <div className="card" style={{width: '18rem'}}>
                    <img src={urlToImage}
                         className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn btn-dark" style={{color: 'white'}}>Read More</a>
                    </div>
                </div>
            </Tilt>
        </div>)
    }
}

export default NewsItem
