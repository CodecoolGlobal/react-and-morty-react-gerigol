import "../../style/cards.css";
import CardList from "./CardList";
import usePaginatedFetch from "../../api/useFetchList";
import { mainUrls } from "../../api/dataRoutes";
import { useState } from "react";

const CharacterList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: characters,
    hasMore,
    loading,
  } = usePaginatedFetch(mainUrls.characters + pageNumber);

  const handleOnNextPage = () => {
    setPageNumber((current) => current + 1);
  };

  return (
    <CardList
      identities={characters}
      hasMore={hasMore}
      loading={loading}
      onNextPage={handleOnNextPage}
      url={/character/}
    />
  );
};

export default CharacterList;
