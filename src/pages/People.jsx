import PeopleHeader from "../components/PeopleHeader";
import PeopleSearch from "../components/PeopleSearch";
import FavoritePeople from "../components/FavoritePeople";
import PeopleList from "../components/PeopleList";

const People = () => {
  return (
    <div className="min-h-screen bg-black md:bg-white">
      <div className="w-full px-4 py-6 md:p-10">

        <PeopleHeader />
        <PeopleSearch />
        <FavoritePeople />
        <PeopleList />

      </div>
    </div>
  );
};

export default People;