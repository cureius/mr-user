import React from 'react'

export const TemplateItem = ({ template }) => {
    const bgChange =() => {
        console.log("clicked");
    };
    return (

                <div className="col">
                    <div onClick= {bgChange} className="card border-primary text-dark bg-light mb-3">
                        <img src={template.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{template.title}</h5>
                            <p className="card-text">{template.des}</p>
                        </div>
                    </div>
                </div>
    )
}
