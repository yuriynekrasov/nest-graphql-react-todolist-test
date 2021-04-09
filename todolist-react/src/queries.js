import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query {
    todos {
      id
      status
      title
    }
  }
`;

export const CREATE_TODO = gql`
mutation createTodo($title: String!, $status: Boolean!, $id: String!){
  createTodo(title: $title, status: $status, id: $id) {
    id
    title
    status
  }
}
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: String!){
    deleteTodo(id: $id) {
      id
      status
      title
    }
  }
`;

export const CHANGE_TODO = gql`
  mutation changeTodo($status: Boolean!, $id: String!){
    changeTodo(status: $status, id: $id){
      id
      status
      title
    }
  }
`;