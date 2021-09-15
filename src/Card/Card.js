import React from 'react';
import classes from './Card.css'

const Card = (props) => {


    return (
        
            <div className={classes.CardWrapper}>
                {
                    props.promoted && <div className={classes.promoted}>Promoted</div>

                }
                <div className={classes.ratingWrapper}>{props.rating}/5 <span>{props.rating_remarks}</span></div>
                <div className={classes.TopSection}> 

                    <img src="/assets/college_01.jpg" />
                    <div className={classes.Overlay}></div>
                    <div className={classes.TagsWrapper}>
                        {
                            props.tags.map(item => {
                                return (
                                    <div className={classes.Tags}>{item}</div>
                                )
                            })
                        }                        
                        <div className={classes.Ranking}>{props.ranking}</div>
                    </div>
                </div>

                <div className={classes.BottomSection}> 
                    <div className={classes.Wrapper}>
                        <div className={classes.LeftWrapper}>

                            <div className={classes.college_name}>{props.college_name} <span className={classes.rating}> {props.rating}</span></div>

                            {/* {props.nearest_place.map(item => {
                                return (
                                    <div className={classes.nearest_place}> {item} |</div>
                                )
                            })} */}

                            <div className={classes.nearest_place}>{props.nearest_place[0]} |<span>{props.nearest_place[1]}</span></div>

                            <div className={classes.famous_nearest_places}>{props.famous_nearest_places}</div>

                            <div className={classes.offertext}>{props.offertext} </div>
                        </div>
                        <div className={classes.RightWrapper}>
                            <div className={classes.feeWrapper}>
                                <span className={classes.original_fees}>Rs. {props.original_fees}</span>
                                <span className={classes.discount}> {props.discount} </span>
                            </div>
                            <div className={classes.discounted_fees}>Rs. {props.discounted_fees}</div>
                            <div className={classes.fees_cycle}>{props.fees_cycle}</div>
                            <div className={classes.amenties}>
                                {
                                    props.amenties.map(item => {
                                        return (
                                            <span key={item}>{item} </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
    )
}

export default Card
