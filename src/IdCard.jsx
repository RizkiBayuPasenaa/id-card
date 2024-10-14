import { useReducer } from "react";


function reducer(state, action) {
  switch(action.type) {
    case 'SET_INPUT': {
      return {
        ...state, [action.payload.name] : action.payload.value
      }
    }
  }
}
function IdCard() {
  
  const initialData = {
    nama: '',
    image: '',
    email: '',
    born: '',
    phone: '',
    position: ''
  }

  const [state, dispatch] = useReducer(reducer, initialData)

  const handleChange = (e) =>{
    dispatch({type : "SET_INPUT", payload:{
      name: e.target.name,
      value: e.target.value,
    }})
  }
  return (
    <>
      <div className="id-card-container">
        <div className="id-card-header">
          <h3>Kartu Tanda Pegawai</h3>
        </div>
        <div className="id-card-body">
          <div className="header">
            <div className="hero" style={{backgroundImage: `url(${state.image})`}}>
            </div>
          </div>
          <div className="body">
          <h4>Name : {state.nama}</h4>
          <h4>Email : {state.email}</h4>
          <h4>Born : {state.born}</h4>
          <h4>Phone : {state.phone}</h4>
          </div>  
        </div>
        <div className="id-card-footer">
            <h2>{state.position}</h2>
          </div>
      </div>
      <div className="input-container">

      <input type="text" placeholder="Masukan nama anda" onChange={handleChange} name="nama" value={state.name}/>
      <input type="text" placeholder="Masukan email anda" onChange={handleChange} name="email" value={state.email}/>
      <input type="date" onChange={handleChange} name="born" value={state.born}/>
      <input type="text" placeholder="Masukan nomor telphone anda" onChange={handleChange} name="phone" value={state.phone}/>
      <input type="text" placeholder="Masukan url profile anda" onChange={handleChange} name="image" value={state.image}/>
      <input type="text" placeholder="Masukan posisi job desk anda" onChange={handleChange} name="position" value={state.position}/>

      </div>
    </>
  )
}

export default IdCard
