import React from 'react';
import {useForm} from 'react-hook-form'

const Tdoform = (props) => {

  const {register, errors, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
      
      console.log(data)
      props.addUser(data)
      e.target.reset();
  }
    
    
    return (
        
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Nombre"
              {...register('title', { required: true })}/>
              <div>
                {errors?.title?.message}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Contraseña"
              className="form-control"
              placeholder="Responsible"
              
              {...register('responsible', { required: true })}/>
              
              <div>
                {errors?.responsible?.message}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="contraseña"
              className="form-control"
              placeholder="Description"
              {...register('description', { required: true })}/>
              
              <div>
                {errors?.description?.message}
            </div>
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                {...register('priority', { required: true })}>
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    
    );
  }


export default Tdoform;

