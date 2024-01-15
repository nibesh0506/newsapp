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
        let {title, description, urlToImage, url, author, date, source} = this.props
        return (<div>
            <Tilt options={defaultOptions}>
                <div className="card" style={{width: '20rem'}}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                          style={{left: '90%', zIndex: '1'}}>{source}</span>
                    <img src={urlToImage}
                         className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="textmuted">
                            By {!author ? "unknown" : author} on {new Date(date).toDateString()}
                            <br/> {new Date(date).toLocaleTimeString()}</small></p>
                        <a href={url} className="btn btn-dark" style={{color: 'white'}}>Read More</a>
                    </div>
                </div>
            </Tilt>
        </div>)
    }
}

export default NewsItem
