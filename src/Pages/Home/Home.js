import React, { useState, useEffect  } from 'react'
import classes from './Home.css'
import Card from '../../Card/Card'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../Loader/loader'


function Home() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const infiniteScrollhandler = () => {
        if(page<5) {
            setPage(prev => prev+1);
        }
    }

    useEffect(() => {

        const loadData = async () => {
            setLoading(true);
            const res = await  axios.get(`./assets/colleges.json`)
            var list=[];
            var num = 10*page;
            for(var i=0; i<num ;i++) {
                list.push(res.data.colleges[i]);

            }
            setData(list);
            setLoading(false);
        }

        loadData();

    }, [page])


    return (
        <div>
            
            <h3 className={classes.Heading}>Colleges in North India</h3>
                
                <InfiniteScroll
                    dataLength={data.length} 
                    next={infiniteScrollhandler}
                    hasMore={data.length<=50}
                >
                <div className={classes.Home}>
                {   data.length > 0 &&
                    data.map(item => {
                        return (
                            <Card 
                            key = {item.college_name}
                            college_name = {item.college_name}
                            discount = {item.discount}
                            original_fees = {item.original_fees}
                            discounted_fees = {item.discounted_fees}
                            ranking = {item.ranking}
                            tags = {item.tags}
                            amenties = {item.amenties}
                            rating = {item.rating}
                            famous_nearest_places = {item.famous_nearest_places}
                            nearest_place = {item.nearest_place}
                            offertext = {item.offertext}
                            fees_cycle = {item.fees_cycle}
                            promoted = {item.promoted}
                            rating_remarks = {item.rating_remarks}
                            />
        
                        )
                    })
                }
                </div>

                </InfiniteScroll>
                {loading && <Loader />}
    

        </div>
    )
}

export default Home


