import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import { isNodesEquivalent } from '../../../../Library/Caches/typescript/3.6/node_modules/@babel/types/lib';

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          isNodesEquivalent.value = '';
        }}
      >
      Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;