import React from 'react';
import LeftArrow from '../assets/svg/LeftArrow';
import Button from './Button'
function EmptyState({type}) {
    return (
        <div class=' auth empty_state'>
             <div className="top">
                <LeftArrow onClick />
            </div>
            <div className="instruction">
                <h3>
                  {type.name}
                 </h3>
                <p>
                  {type.instruction}
                </p>
             
            </div>
            <div className="img">
                <img src={type.img} alt='' />
            </div>
            <div className="instruction">
                <h3>
                  This Place looks empty
                 </h3>
                <p>
                    {type.note}
                </p>
             
            </div>
            <Button content={'View errands'} />
        </div>
    );
}

export default EmptyState;