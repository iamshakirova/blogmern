import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import TagIcon from '@mui/icons-material/Tag'
import './Sidebar.scss'
import noAvatarImg from '../../img/avatar.jpeg'
import { useGetTagsQuery } from '../../services/tagsApi'



const Sidebar = () => {
  const [isTags, setIsTags] = useState([])

  const tagsQuery = useGetTagsQuery()
  const tagsList = tagsQuery.data;
  const tagsIsFetching = tagsQuery.isFetching;

  useEffect(() => {
    if(tagsList){
      setIsTags(tagsList)
    }
  }, [tagsList, tagsIsFetching])
  console.log(isTags)

  const uniqueTags = Array.from(new Set(isTags))


  return (
    <div className='sidebar'>
      <div className='tags-block side-block'>
        <div className='tags-block-title'>Tags</div>
        {
          uniqueTags.map((tags, i) => (
            <ul key={i}>
              <li>
                  <div><TagIcon/><Link to='/tags'>{tags}</Link></div>
              </li>
            </ul>
          ))
        }
      </div>
      <div className='comments-block side-block'>
        <div className='comments-block-title'>Comments</div>
        <ul>
          <li>
              <div className='comments-block-item'>
                <img src={noAvatarImg}  alt="" />
                <div className='comments-block-item-info'>
                  <div className='comments-block-item-name'>Petya Dudochkin</div>
                  <div className='comments-block-item-txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores est exercitationem, blanditiis placeat fuga soluta commodi, dolorum quod, molestiae atque in repellendus? Pariatur deleniti eveniet, mollitia reiciendis atque quae animi?</div>
                </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar