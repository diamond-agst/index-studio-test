import React, {useState} from "react";
import "./styles.scss"
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';

const ShowMore = ({items, setItems}) => {
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const loadingMore = () => {
        setLoading(true)
            axios.get(`https://testguru.ru/frontend-test/api/v1/ads?page=${page}`)
            .then(res => {
                setPage(page + 1)
                let copy = Object.assign([], items);
                for(let i = 0; i < res.data.items.length; i++){
                    copy.push(res.data.items[i])
                    setItems(copy)
                }
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                setError(true)
            })
    }
    return(
        <div className="showMore">
            <div>
                {
                    !loading ? 
                    !error ? page <= 10 ? items ? 
                        <p onClick={loadingMore} className="showMoreText">Показать еще</p>:
                        <Skeleton style={{borderRadius: 45}} variant="rounded" width={125} height={32} />:
                        null:
                        <div className="errorBlock">
                            <p>Ошибка при загрузке</p>
                            <button>Повторить попытку</button>
                        </div>:
                        <div class="loader"></div>
                }
                
            </div>
        </div>
    )

}

export default ShowMore;