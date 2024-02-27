import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/campaignSlice";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        onInput={(e) => {
          dispatch(setSearchTerm(e.target.value));
        }}
      ></input>
    </>
  );
};

export default Search;
