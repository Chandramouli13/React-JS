import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div class="container-lg col-md-12 g-2">
                            <div class="row g-5 justify-content-around">
                                <div class="tileComponent1 bg-dark" style={{width: "25rem"}}>
                                    <img src={item.meal_image} alt={item.mealtype}/>
                                    <div class="tileComponent2">
                                        {item.mealtype}
                                        <p class="componentSubHeading">Start Your Day With Exclusive {item.mealtype} Options.</p>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </Link>
                )
            })
        }
    }


    return(
        <div id="main">
            {listMeal(props)}
        </div>
    )
}

export default QuickDisplay