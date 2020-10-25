import { useQuery, gql } from '@apollo/client';


const useStatusQuery = ({id}) => {

  const query = gql`
  query($id: String!) {
    getCurrentStatus(id: $id) {
      id
      temp
      cap
      tempStatus
      capStatus
      reportTime
    }
  }
`;

  const options = {
    variables: { id },
    pollInterval: 2000,
  };

  const { data, error, loading } = useQuery(query, options);

  return {
    loading,
    error,
    data: data ? data.getCurrentStatus[0] : data
  };

}

export default useStatusQuery
