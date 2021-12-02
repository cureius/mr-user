import React from 'react'
import { TemplateItem } from './TemplateItem'
export const Templates = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">
                Templates List
            </h3>

            <div className="row">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {props.templates.map((template) => {
                        return <TemplateItem template={template} />
                    })}
                </div>
            </div>
        </div>
    )
}
