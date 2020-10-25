import useStatusQuery from "./useStatusQuery";

const usePlantData = ({id}) => {
  return {
    plantData: useStatusQuery({id})
  }

};

export default usePlantData;
