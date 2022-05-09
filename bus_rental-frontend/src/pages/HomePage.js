import React, { useState, useEffect } from 'react'
import { getItems, deleteItem } from '../axios/itemRepo';
import LoadingBar from '../helpers/LoadingBar';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function HomePage() {
  const [items, setItems] = useState([]);
  const [boolHelp, setBoolHelp] = useState(true);

  useEffect(() => {
    getItems(result => setItems(result))
  }, [items.length])

  const deleteHandler = async (id) => {
    await deleteItem(id);
    getItems(result => setItems(result))
  }

  return (
    <div className="row g-2">
      <div className="my-3">
        <Link to='/items/add' className="btn btn-primary">
          <AiOutlinePlusCircle></AiOutlinePlusCircle>
          Add Item
        </Link>
      </div>
      {
        items.length > 0 ?
          items.map(item => {
            const { id, name, price, image } = item;
            return (
              <div key={id}
                className="card col-sm-11 col-md-5 col-lg-3 mx-1">
                <img className="card-img-top" src={image} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title text-center">{name}</h5>
                  <h5 className="card-title text-center">Rp{price}</h5>
                  <div className="row col-12">
                    <div className="col-6 text-center">
                      <Link to={`/items/edit/${id}`} className="btn btn-warning"> Edit </Link>
                    </div>
                    <div className="col-6 text-center">
                      <button
                        onClick={() => { deleteHandler(+id); setBoolHelp(!boolHelp); }}
                        className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) : <LoadingBar></LoadingBar>
      }
    </div>
  )
}

export default HomePage